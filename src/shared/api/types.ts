export type Options = RequestInit & {
  params: Record<string, string>;
};

export type StatusCode = 400 | 401 | 403 | 404 | 500 | 501 | 502 | 503 | 504;

export type ErrorResponse = {
  code: StatusCode;
  message: string;
};

export type ServiceResponse<T> = Promise<T | ErrorResponse>;

export interface Service {
  baseUrl: string;

  get: <T>(url: string, init?: Options) => ServiceResponse<T>;
  post: <T>(url: string, init?: Options) => ServiceResponse<T>;
  put: <T>(url: string, init?: Options) => ServiceResponse<T>;
  delete: <T>(url: string, init?: Options) => ServiceResponse<T>;
}
