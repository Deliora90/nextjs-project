import { Options, Service } from "@/shared/api/types";
import {
  getGetResponse,
  getDeleteResponse,
  getPostResponse,
  getPutResponse,
} from "@/shared/lib";

export class MockService implements Service {
  baseUrl: string;

  constructor(baseUrl: string = "") {
    this.baseUrl = baseUrl;
  }

  async get<T>(url: string, init?: Options) {
    return await getGetResponse<T>(url, init);
  }

  async post<T>(url: string, init?: Options) {
    return await getPostResponse<T>(url, init);
  }

  async put<T>(url: string, init?: Options) {
    return await getPutResponse<T>(url, init);
  }

  async delete<T>(url: string, init?: Options) {
    return await getDeleteResponse<T>(url, init);
  }
}
