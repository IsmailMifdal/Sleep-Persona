import axios, { AxiosInstance } from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ApiResponse } from '../types';

const API_BASE_URL = process.env.EXPO_PUBLIC_API_URL || 'http://localhost:3000/api';

class ApiService {
  private client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      baseURL: API_BASE_URL,
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // Add auth token interceptor
    this.client.interceptors.request.use(
      async (config) => {
        const token = await AsyncStorage.getItem('auth_token');
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
  }

  // Auth endpoints
  async login(email: string, password: string): Promise<ApiResponse<any>> {
    const response = await this.client.post('/auth/login', { email, password });
    return response.data;
  }

  async register(email: string, password: string, name: string): Promise<ApiResponse<any>> {
    const response = await this.client.post('/auth/register', { email, password, name });
    return response.data;
  }

  // User endpoints
  async getUser(userId: string): Promise<ApiResponse<any>> {
    const response = await this.client.get(`/users/${userId}`);
    return response.data;
  }

  async updateUser(userId: string, data: any): Promise<ApiResponse<any>> {
    const response = await this.client.put(`/users/${userId}`, data);
    return response.data;
  }

  // Persona endpoints
  async getPersona(userId: string): Promise<ApiResponse<any>> {
    const response = await this.client.get(`/personas/${userId}`);
    return response.data;
  }

  async generatePersona(userId: string, onboardingData: any): Promise<ApiResponse<any>> {
    const response = await this.client.post(`/personas/generate`, { userId, onboardingData });
    return response.data;
  }

  // Sleep entry endpoints
  async getSleepEntries(userId: string, limit = 30): Promise<ApiResponse<any>> {
    const response = await this.client.get(`/sleep-data/${userId}?limit=${limit}`);
    return response.data;
  }

  async createSleepEntry(data: any): Promise<ApiResponse<any>> {
    const response = await this.client.post('/sleep-data', data);
    return response.data;
  }

  // Routine endpoints
  async getEveningRoutine(userId: string): Promise<ApiResponse<any>> {
    const response = await this.client.get(`/routines/${userId}/evening`);
    return response.data;
  }

  async updateRoutineProgress(routineId: string, stepId: string, completed: boolean): Promise<ApiResponse<any>> {
    const response = await this.client.put(`/routines/${routineId}/steps/${stepId}`, { completed });
    return response.data;
  }

  // Analytics endpoints
  async getSleepMetrics(userId: string, days = 7): Promise<ApiResponse<any>> {
    const response = await this.client.get(`/analytics/${userId}/metrics?days=${days}`);
    return response.data;
  }

  async getPatterns(userId: string): Promise<ApiResponse<any>> {
    const response = await this.client.get(`/analytics/${userId}/patterns`);
    return response.data;
  }
}

export default new ApiService();
