import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { config } from '../../utils/config';

export class ApiClient {
  private readonly client: AxiosInstance;

  constructor(token?: string) {
    this.client = axios.create({
      baseURL: config.apiBaseUrl,
      headers: {
        'Content-Type': 'application/json',
        ...(token && { Authorization: `Bearer ${token}` }),
      },
    });
  }

  async get<T>(path: string): Promise<T> {
    const response: AxiosResponse<T> = await this.client.get(path);
    return response.data;
  }

  async post<T>(path: string, body: unknown): Promise<T> {
    const response: AxiosResponse<T> = await this.client.post(path, body);
    return response.data;
  }

  async getRaw(path: string): Promise<{ status: number; data: unknown }> {
    const response = await this.client.get(path, { validateStatus: () => true });
    return { status: response.status, data: response.data };
  }

  async postRaw(path: string, body: unknown): Promise<{ status: number; data: unknown }> {
    const response = await this.client.post(path, body, { validateStatus: () => true });
    return { status: response.status, data: response.data };
  }
}
