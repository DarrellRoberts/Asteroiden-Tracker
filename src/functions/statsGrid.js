export const getOrbitingBodies = (fetchedObject) => {
  if (fetchedObject) {
    const planetArray = fetchedObject?.close_approach_data.map(
      (record) => record.orbiting_body
    );
    const uniquePlanetArray = [...new Set(planetArray)];
    return uniquePlanetArray;
  }
};

export const getLastObservedDate = (fetchedObject) => {
  if (fetchedObject) {
    const fetchedDate = fetchedObject?.orbital_data?.last_observation_date;
    const newDate = fetchedDate.split("-").reverse().join("-");
    return newDate;
  }
};

export const getFirstObservedDate = (fetchedObject) => {
  if (fetchedObject) {
    const fetchedDate = fetchedObject?.orbital_data?.first_observation_date;
    const newDate = fetchedDate.split("-").reverse().join("-");
    return newDate;
  }
};

export const getMagnitude = (fetchedObject) => {
  if (fetchedObject) {
    //H, Absolute Magnitude
    const magnitude = fetchedObject?.absolute_magnitude_h;
    return magnitude.toString().replace(".", ",");
  }
};

export const getFastestSpeed = (fetchedObject) => {
  if (fetchedObject) {
    const speedArray = fetchedObject?.close_approach_data.map(
      (record) => record.relative_velocity.kilometers_per_second
    );
    const topSpeed = Math.max(...speedArray);
    // Kilometer pro Sekunden
    return topSpeed.toFixed(2).toString().replace(".", ",");
  }
};

export const getEstSize = (fetchedObject) => {
  if (fetchedObject) {
    const minSize =
      fetchedObject?.estimated_diameter.kilometers.estimated_diameter_min;
    const maxSize =
      fetchedObject?.estimated_diameter.kilometers.estimated_diameter_max;
    const avgSize = (minSize + maxSize) / 2;
    // diameter in Kilometer
    return avgSize.toFixed(2).toString().replace(".", ",");
  }
};
