import { ApiService } from "../api-service";

export const apiService = new ApiService(process.env.NEXT_PUBLIC_API_URL);
