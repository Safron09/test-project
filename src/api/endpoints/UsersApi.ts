import { ApiClient } from '../client/ApiClient';
import { User } from '../types';

export class UsersApi {
  constructor(private readonly client: ApiClient) {}

  async getUsers(): Promise<User[]> {
    return this.client.get<User[]>('/users');
  }

  async getUserRaw(id: number): Promise<{ status: number; data: unknown }> {
    return this.client.getRaw(`/users/${id}`);
  }

  async createPostRaw(payload: Record<string, unknown>): Promise<{ status: number; data: unknown }> {
    return this.client.postRaw('/posts', payload);
  }
}
