import { AxiosResponse } from "axios";
import $http from "../http";
import { AuthResponse } from "../models/response/AuthResponse";

export default class AuthService {
    static async login(email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
        return $http.post<AuthResponse>('/api/auth/login', {email, password});
    }

    static async logout() { return $http.post('/api/auth/logout', {}); }

    static async register(email: string, password: string, username: string): Promise<AxiosResponse<AuthResponse>> {
        return $http.post<AuthResponse>('/api/auth/register', {email, password, username});
    }
}