export const config = {
  baseUrl: process.env.KAIJU_BASE_URL ?? '',
  email: process.env.KAIJU_EMAIL ?? '',
  password: process.env.KAIJU_PASSWORD ?? '',
  totpSecret: process.env.KAIJU_TOTP_SECRET ?? '',
  apiBaseUrl: process.env.KAIJU_API_BASE_URL ?? 'https://jsonplaceholder.typicode.com',
  headless: process.env.HEADLESS !== 'false',
};
