// "I set up ESLint in the polish phase once the framework was stable.I think at that point, I knew what patterns needed enforcing and could configure rules that matched the actual codebase."

module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  env: {
    node: true,
    es2022: true,
  },
  rules: {
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    'no-console': 'warn',
  },
  ignorePatterns: ['node_modules/', 'playwright-report/', 'test-results/', 'allure-results/'],
};
