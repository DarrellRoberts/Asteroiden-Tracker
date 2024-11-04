export const hazardous = (fetchedObject) => {
  if (fetchedObject) {
    return fetchedObject?.is_potentially_hazardous_asteroid;
  }
};

export const nameLimited = (fetchedObject) => {
  if (fetchedObject) {
    return fetchedObject?.name_limited;
  }
};

export const getFullName = (fetchedObject) => {
  if (fetchedObject) {
    return fetchedObject?.name;
  }
};

export const getNasaLink = (fetchedObject) => {
  if (fetchedObject) {
    return fetchedObject?.nasa_jpl_url;
  }
};
