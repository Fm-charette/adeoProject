function count(data) {
  if (!data || data.length === 0) {
    throw new Error('Invalid data: please provide a valid data file');
  }
  const dataCounter = data.data.map(country => {
    if (country.people.length === 0)
      throw new Error('No people in the country');
    return {
      name: `${country.name} [${country.people.length}]`,
      people: country.people.map(p => {
        if (p.animals.length === 0)
          throw new Error('No animals');
        return {
          name: `${p.name} [${p.animals.length}]`,
          animals: p.animals
        }
      })
    }
  })
  return dataCounter;
}

module.exports = count;