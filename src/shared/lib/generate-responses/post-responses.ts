import { Options, ServiceResponse } from "@/shared/api/types";

export const getPostResponse = <T>(
  url: string,
  init?: Options
): ServiceResponse<T> => {
  return Promise.reject({
    code: 400,
    message: "Request error",
  });
};
