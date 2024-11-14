export const mostRecentAsteroidArray = (fetchedData) => {
  if (fetchedData.length === 0) {
    return [];
  }
  return fetchedData.sort(
    (a, b) =>
      Date.parse(b.orbital_data.last_observation_date) -
      Date.parse(a.orbital_data.last_observation_date)
  );
};
