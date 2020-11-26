function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

export const getNormalaixedDataToTable = (data) => {
  const resultData = [];

  data.forEach(person => {
    const fullName = person.name.split(' ');
    resultData.push({
      key: person.id,
      name: fullName[0] || '',
      surname: fullName[1] || '',
      age: getRandomInt(18, 90),
    })
  })

  return resultData;
}