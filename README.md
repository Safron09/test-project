# Kaiju Test Framework

Playwright + TypeScript test framework covering UI and API layers. Built as a take-home assignment project.

UI tests run against the Kaiju MDM platform. API tests use [JSONPlaceholder](https://jsonplaceholder.typicode.com) as a public test API.

---

## Stack

- [Playwright](https://playwright.dev) — UI and API test runner
- TypeScript
- Allure + Playwright HTML — dual reporting
- GitHub Actions — CI/CD
- Docker — containerized test execution

---

## Local Setup

**Prerequisites:** Node.js 18+, npm

```bash
git clone https://github.com/Safron09/test-project.git
cd test-project
npm install
npx playwright install chromium
```

Create a `.env` file in the project root:

```
KAIJU_BASE_URL=https://your-instance.kandji.io
KAIJU_EMAIL=your@email.com
KAIJU_PASSWORD=yourpassword
KAIJU_TOTP_SECRET=your_base32_totp_secret
HEADLESS=true
```

---

## Running Tests

```bash
# Full suite
npx playwright test

# UI only
npx playwright test --project=ui

# API only
npx playwright test --project=api

# By tag
npx playwright test --grep "@smoke"
npx playwright test --grep "@regression"
npx playwright test --grep "@e2e"

# Headed (watch the browser)
npx playwright test --project=ui --headed

# Specific test file
npx playwright test --grep "Apple Silicon"
```

---

## Reports

```bash
# Open Playwright HTML report
npx playwright show-report

# Open Allure report (requires allure CLI)
allure serve allure-results
```

Install Allure CLI once if needed:
```bash
npm install -g allure-commandline
```

---

## Project Structure

```
tests/
  ui/
    auth/           # Login tests positive, negative, SQL injection
    navigation/     # Sidebar navigation
    devices/        # Device list, filters, Prism tab
    library/        # E2E, add library item flow
  api/
    users/          # GET list, GET 404, POST injection (Uses public API)
src/
  pages/            # Page Object Model classes
  helpers/          # Auth and TOTP helpers
  api/                
    client/         # Axios base client
    endpoints/      # Per-resource API wrappers
    types/          # TypeScript interfaces for API responses
  fixtures/         # Shared Playwright fixtures
  utils/            # Config and env loader
global-setup.ts     # Runs once before UI tests — handles login + 2FA
```

---

## Tags

| Category | Tags |
|----------|------|
| Scope | `@smoke` `@regression` `@e2e` `@negative` |
| Type | `@ui` `@api` |
| Page | `@auth` `@navigation` `@devices` `@library` `@users` |

---

## Docker

```bash
# Full suite
docker-compose up

# By profile
docker-compose --profile ui up
docker-compose --profile api up
docker-compose --profile smoke up
docker-compose --profile e2e up
docker-compose --profile regression up
```

Test results and reports are mounted back to the host automatically.

---

## CI/CD

GitHub Actions runs on every push and pull request to `main`. UI and API workflows run as separate jobs.

Secrets required in repository settings:
(Set as dynamic variables, should work with any credentials)

| Secret | Description |
|--------|-------------|
| `KAIJU_BASE_URL` | Target environment URL |
| `KAIJU_EMAIL` | Login email |
| `KAIJU_PASSWORD` | Login password |
| `KAIJU_TOTP_SECRET` | Base32 TOTP secret for 2FA |

Workflows can also be triggered manually from the Actions tab.
