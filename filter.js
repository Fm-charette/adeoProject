function filter(data, pattern) {
  if (!data || data.length === 0) {
    return 'Invalid data: One or more countries are empty or improperly formatted.';
  }
  const filteredData = data.data
    .map(country => ({
      name: country.name,
      peoples: country.people.map(p => ({
        name: p.name,
        animals: p.animals.filter(animal =>
          animal.name.includes(pattern.toLowerCase())
        )
      })).filter(people => people.animals.length > 0)
    }))
    .filter(country => country.peoples.length > 0);
  if (filteredData.length === 0) {
    return 'No matching data found for the given pattern'
  }
  return filteredData;
}

module.exports = filter;