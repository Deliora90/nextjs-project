export type Options<T> = Omit<RequestInit, "body"> & {
  params?: Record<string, string>;
  body?: T;
};

export type StatusCode = 400 | 401 | 403 | 404 | 500 | 501 | 502 | 503 | 504;

export type ErrorResponse = {
  code: StatusCode;
  message: string;
};

export type ServiceResponse<T> = Promise<T>;

export interface Service {
  baseUrl: string;

  get: <T, U>(url: string, init?: Options<U>) => ServiceResponse<T>;
  post: <T, U>(url: string, init?: Options<U>) => ServiceResponse<T>;
  put: <T, U>(url: string, init?: Options<U>) => ServiceResponse<T>;
  delete: <T, U>(url: string, init?: Options<U>) => ServiceResponse<T>;
}
