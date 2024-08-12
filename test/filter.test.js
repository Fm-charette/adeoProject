const filter = require('../filter');

const data = [
  {
    name: "Australia",
    peoples: [
      {
        name: "Aboriginals",
        animals: ["Kangaroo", "Koala", "Emu", "Rat"]
      }
    ]
  },
  {
    name: "Africa",
    peoples: [
      {
        name: "Masai",
        animals: ["Lion", "Zebra", "Buffalo"]
      }
    ]
  },
  {
    name: "France",
    peoples: [
      {
        name: "Pierre",
        animals: [],
      }
    ]
  },
  {
    name: "Italia",
    peoples: [],
  },
];

test('Filter animals with pattern "ra"', () => {
  const pattern = 'ra';
  const result = filter(data, pattern);

  expect(result).toEqual([
    {
      name: "Australia",
      peoples: [
        {
          name: "Aboriginals",
          animals: ["Rat"]
        }
      ]
    },
    {
      name: "Africa",
      peoples: [
        {
          name: "Masai",
          animals: ["Zebra"]
        }
      ]
    }
  ]);
});

test('error message validation', () => {
  const pattern = 'xyz';
  const dataTest = [];
  const result = filter(dataTest, pattern);

  expect(result).toEqual('Invalid data: One or more countries are empty or improperly formatted.');
});
