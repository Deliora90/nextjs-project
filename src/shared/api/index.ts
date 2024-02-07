import { MockService } from "./mock-service";
import { ApiService } from "./api-service";

export type { ServiceResponse, ErrorResponse, Options } from "./types";

export const api =
  process.env.ENVIRONMENT === "development"
    ? new MockService(process.env.BASE_URL)
    : new ApiService(process.env.BASE_URL);
