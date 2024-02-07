import { ErrorResponse, Options, Service } from "@/shared/api/types";

const headers: HeadersInit = {
  "Content-Type": "application/json;charset=utf-8",
};

export class ApiService implements Service {
  baseUrl: string;

  constructor(baseUrl: string = "") {
    this.baseUrl = baseUrl;
  }

  private getUrl = (url: string, params?: Record<string, string>): string => {
    const urlParams = new URLSearchParams(params);
    return `${this.baseUrl}${url}?${urlParams}`;
  };

  async get<T>(url: string, init?: Options) {
    return await fetch(this.getUrl(url, init?.params), {
      method: "GET",
      headers,
      ...init,
    })
      .then((response): Promise<T> => response.json())
      .catch(
        (error): Promise<ErrorResponse> =>
          Promise.reject({
            code: 400,
            message: error.message ?? "Request error",
          })
      );
  }

  async post<T>(url: string, init?: Options) {
    return await fetch(this.getUrl(url, init?.params), {
      method: "POST",
      headers,
      ...init,
    })
      .then((response): Promise<T> => response.json())
      .catch(
        (error): Promise<ErrorResponse> =>
          Promise.reject({
            code: 400,
            message: error.message ?? "Request error",
          })
      );
  }

  async put<T>(url: string, init?: Options) {
    return await fetch(this.getUrl(url, init?.params), {
      method: "PUT",
      headers,
      ...init,
    })
      .then((response): Promise<T> => response.json())
      .catch(
        (error): Promise<ErrorResponse> =>
          Promise.reject({
            code: 400,
            message: error.message ?? "Request error",
          })
      );
  }

  async delete<T>(url: string, init?: Options) {
    return await fetch(this.getUrl(url, init?.params), {
      method: "DELETE",
      headers,
      ...init,
    })
      .then((response): Promise<T> => response.json())
      .catch(
        (error): Promise<ErrorResponse> =>
          Promise.reject({
            code: 400,
            message: error.message ?? "Request error",
          })
      );
  }
}
