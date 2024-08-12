function filter(data, pattern) {
  if (!data || data.length === 0) {
    return 'Invalid data: One or more countries are empty or improperly formatted.'
  }
  return data
    .map(country => (
      {
      name: country.name,
      peoples: country.peoples.map(people => ({
        name: people.name,
        animals: people.animals.filter(animal =>
          animal.toLowerCase().includes(pattern.toLowerCase())
        )
      })).filter(people => people.animals.length > 0)
    })).filter(country => country.peoples.length > 0);
}

module.exports = filter;