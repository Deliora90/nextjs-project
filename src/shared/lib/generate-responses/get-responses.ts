import { Options, ServiceResponse } from "@/shared/api/types";
import { getPlaces } from "../generate-data";

export const getGetResponse = <T>(
  url: string,
  init?: Options
): ServiceResponse<T> => {
  switch (url) {
    case "places":
      return Promise.resolve(getPlaces(10) as T);
  }
  return Promise.reject({
    code: 400,
    message: "Request error",
  });
};
