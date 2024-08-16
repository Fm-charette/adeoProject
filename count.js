function count(data) {
  if (!data || data.length === 0) {
    return 'Invalid data: please provide a valid data file';
  }
  const dataCounter = data.data.map(country => {
    if (country.people.length === 0) {
      return ('No people in the country');
    }
    const countPeoples = country.people.length;
    return {
      name: `${country.name} [${countPeoples}]`,
      people: country.people.map(p => {
        if (p.animals.length === 0) {
          return ('No animals');
        }
        const countAnimals = p.animals.length;
        return {
          name: `${p.name} [${countAnimals}]`,
          animals: p.animals
        }
      })
    }
  })
  return dataCounter;
}

module.exports = count;