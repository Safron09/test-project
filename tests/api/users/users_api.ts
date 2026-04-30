import { test, expect } from '@playwright/test';
import { ApiClient } from '../../../src/api/client/ApiClient';
import { UsersApi } from '../../../src/api/endpoints/UsersApi';

test.describe('Users API', () => {
  let usersApi: UsersApi;

  test.beforeEach(() => {
    usersApi = new UsersApi(new ApiClient());
  });

  test('GET /users returns list with valid structure @smoke @regression @api @users', async () => {
    const users = await usersApi.getUsers();

    expect(users.length).toBeGreaterThan(0);
    for (const user of users) {
      expect(user.id).toBeDefined();
      expect(user.email).toMatch(/@/);
      expect(user.name).toBeTruthy();
    }
  });

  test('GET /users/:id returns 404 for non-existent user @regression @negative @api @users', async () => {
    const response = await usersApi.getUserRaw(9999);

    expect(response.status).toBe(404);
  });

  test('POST /posts with SQL injection payload is handled safely @regression @api @users', async () => {
    const injection = "' OR '1'='1; DROP TABLE users;--";
    const response = await usersApi.createPostRaw({ title: injection, body: injection, userId: 1 });

    expect(response.status).toBe(201);
    const data = response.data as Record<string, unknown>;
    expect(data.title).toBe(injection);
  });
});
