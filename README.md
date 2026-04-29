
TypeScript-based end-to-end test framework covering UI and API layers, built as an assignment project.
Name of the company changed tp Kaiju

## Structure
(subject to a change as I move along)
```
tests/
  ui/         # Browser-based tests (login, navigation, devices)
  api/        # API-layer tests (devices, users, blueprints)
src/
  pages/      # Page Object Model classes
  helpers/    # Auth, TOTP, and utility helpers
  api/        # API client and endpoint modules
  fixtures/   # Shared Playwright test fixtures
  utils/      # Config and environment loader
```

## Local Setup
Add commands and how to set up as I go

## UI and API Tags
| Category | Tags |
|----------|------|
| Scope | `@smoke` `@regression` `@e2e` `@negative` |
| Auth | `@auth` |
| Page | `@devices` `@users` `@navigation` |
| Type | `@ui` `@api` |


## Docker
Docker set up for local workflow

## CI/CD
GitHub Actions workflows run on every push and pull request. UI and API suites run in parallel. Test reports are uploaded as artifacts.

## Report
Report to be decided, allure or any other tool