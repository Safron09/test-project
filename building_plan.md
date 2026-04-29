# Building Plan — Kaiju E2E Test Framework

Temporary task tracker. Top-level phases only.

- [+] **Phase 1** Project foundation (config, tsconfig, playwright.config, .env, utils)
**Note** All support files are done (Standard format, adjustments needed)

- [+] **Phase 2** Auth layer (TOTP helper, page objects for login/2FA, global setup)
**Note** Pre-set files for UI and Auth added. Extending scope with negative tests for log in

- [+] **Phase 3** UI tests (devices page object, fixtures, login / navigation / devices specs)
**Note** Ui tests added for basic navigation, devices and users. All tests are short smoke/regression tests

- [ ] **Phase 3.1** UI E2E test. Frow what I learned, 'll create one test for the Library tab (Library > Add Item > Scroll to manage OS > Select ios17 > Configure > add label > Save > Verify Label Exist)
- [ ] **Phase 4** API tests (types, API client, endpoint classes, devices/users specs)
- [ ] **Phase 5** Reporting (Allure or Playwright HTML, screenshots on failure) (Alredy playwright, but I'll add second one)
- [ ] **Phase 6** Docker (Dockerfile, docker-compose, local end-to-end run verified)
- [ ] **Phase 7** GitHub Actions CI/CD (UI and API pipelines, artifact upload)
- [ ] **Phase 8** Polish (constants, .gitkeep, final README, test tags)
- [ ] **Phase 8.1** Security checks? Like sqli, forgery?
