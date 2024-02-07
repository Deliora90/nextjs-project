import { faker } from "@faker-js/faker";
import { Place } from "../types";

export const getPlaces = (count: number): Place[] => {
  const result: Place[] = [];
  for (let i = 0; i < count; i++) {
    const airport = faker.airline.airport();
    const place: Place = {
      id: faker.string.uuid(),
      code: airport.iataCode,
      country_code: faker.location.countryCode("alpha-2"),
      country_name: faker.location.country(),
      main_airport_name: airport.name,
      name: faker.location.city(),
    };
    result.push(place);
  }
  return result;
};
