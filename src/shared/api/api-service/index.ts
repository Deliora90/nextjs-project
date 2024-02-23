import { ErrorResponse, Options, Service } from "@/shared";

const defaultHeaders: HeadersInit = {
  "Content-Type": "application/json;charset=utf-8",
};

const getBody = <T>(data?: T) => (data ? JSON.stringify(data) : undefined);

const successHandler = <T>(response: Response): Promise<T> => {
  if (!response.ok) {
    throw response;
  }
  return response.json();
};

//TODO: Тут нужно обработать ошибку
const errorHandler = (error: unknown) => {
  throw {
    code: 400,
    message: "Request error",
  };
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

  async get<T, U>(url: string, init?: Options<U>) {
    return await fetch(this.getUrl(url, init?.params), {
      method: "GET",
      headers: init?.headers ?? defaultHeaders,
      ...init,
      body: undefined,
    })
      .then(successHandler<T>)
      .catch(errorHandler);
  }

  async post<T, U>(url: string, init?: Options<U>) {
    return await fetch(this.getUrl(url, init?.params), {
      method: "POST",
      headers: init?.headers ?? defaultHeaders,
      ...init,
      body: getBody(init?.body),
    })
      .then(successHandler<T>)
      .catch(errorHandler);
  }

  async put<T, U>(url: string, init?: Options<U>) {
    return await fetch(this.getUrl(url, init?.params), {
      method: "PUT",
      headers: init?.headers ?? defaultHeaders,
      ...init,
      body: getBody(init?.body),
    })
      .then(successHandler<T>)
      .catch(errorHandler);
  }

  async delete<T, U>(url: string, init?: Options<U>) {
    return await fetch(this.getUrl(url, init?.params), {
      method: "DELETE",
      headers: init?.headers ?? defaultHeaders,
      ...init,
      body: getBody(init?.body),
    })
      .then(successHandler<T>)
      .catch(errorHandler);
  }
}
