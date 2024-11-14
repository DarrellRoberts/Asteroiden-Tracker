export const hazardous = (fetchedObject) => {
  if (fetchedObject?.length === 0) {
    return [];
  }
  return fetchedObject?.is_potentially_hazardous_asteroid;
};

export const nameLimited = (fetchedObject) => {
  if (fetchedObject?.length === 0) {
    return [];
  }
  return fetchedObject?.name_limited;
};

export const getFullName = (fetchedObject) => {
  if (fetchedObject?.length === 0) {
    return [];
  }
  return fetchedObject?.name;
};

export const getNasaLink = (fetchedObject) => {
  if (fetchedObject?.length === 0) {
    return [];
  }
  return fetchedObject?.nasa_jpl_url;
};
