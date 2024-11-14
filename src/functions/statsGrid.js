export const getOrbitingBodies = (fetchedObject) => {
  if (fetchedObject.length === 0) {
    return [];
  }
  const planetArray = fetchedObject?.close_approach_data.map(
    (record) => record.orbiting_body
  );
  const uniquePlanetArray = [...new Set(planetArray)];
  return uniquePlanetArray;
};

export const getLastObservedDate = (fetchedObject) => {
  if (fetchedObject.length === 0) {
    return [];
  }
  return fetchedObject?.orbital_data?.last_observation_date
    .split("-")
    .reverse()
    .join("-");
};

export const getFirstObservedDate = (fetchedObject) => {
  if (fetchedObject.length === 0) {
    return [];
  }
  return fetchedObject?.orbital_data?.first_observation_date
    .split("-")
    .reverse()
    .join("-");
};

export const getMagnitude = (fetchedObject) => {
  if (fetchedObject.length === 0) {
    return [];
  }
  //H, Absolute Magnitude
  return fetchedObject?.absolute_magnitude_h.toString().replace(".", ",");
};

export const getFastestSpeed = (fetchedObject) => {
  if (fetchedObject.length === 0) {
    return [];
  }
  const speedArray = fetchedObject?.close_approach_data.map(
    (record) => record.relative_velocity.kilometers_per_second
  );
  return Math.max(...speedArray)
    .toFixed(2)
    .toString()
    .replace(".", ",");
};

export const getEstSize = (fetchedObject) => {
  if (fetchedObject.length === 0) {
    return [];
  }
  const minSize =
    fetchedObject?.estimated_diameter.kilometers.estimated_diameter_min;
  const maxSize =
    fetchedObject?.estimated_diameter.kilometers.estimated_diameter_max;
  const avgSize = (minSize + maxSize) / 2;
  // diameter in Kilometer
  return avgSize.toFixed(2).toString().replace(".", ",");
};
