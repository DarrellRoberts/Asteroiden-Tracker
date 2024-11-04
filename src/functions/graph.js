//x-axis
export const getCloseApproachYears = (fetchedObject) => {
  if (fetchedObject) {
    const earthMissData = fetchedObject?.close_approach_data.filter(
      (record) => record.orbiting_body === "Earth"
    );
    const extractYear = (string) => string?.split("-")[0];
    const yearArray = earthMissData?.map((record) =>
      extractYear(record.close_approach_date)
    );
    return yearArray;
  }
};

//y-axis
export const getMissDistance = (fetchedObject) => {
  if (fetchedObject) {
    const earthMissData = fetchedObject?.close_approach_data.filter(
      (record) => record.orbiting_body === "Earth"
    );
    const missDistanceArray = earthMissData?.map(
      (record) => record.miss_distance.astronomical
    );
    //AU, 150 Million Kilometer (die Entfernung zwischen die Sonne und Erde)
    return missDistanceArray;
  }
};
