const filter = require('../filter');
const dataFile = require('../data');

test('Filter animals with pattern "as"', () => {
  const pattern = 'as';
  const result = filter(dataFile, pattern);

  expect(result).toEqual([
    {
      "name": "Tohabdal",
      "peoples": [
        {
          "name": "Effie Houghton",
          "animals": [
            {
              "name": "African Wild Ass"
            }
          ]
        },
        {
          "name": "Owen Bongini",
          "animals": [
            {
              "name": "Zebrashark"
            }
          ]
        }
      ]
    },
    {
      "name": "Uzuzozne",
      "peoples": [
        {
          "name": "Georgia Hooper",
          "animals": [
            {
              "name": "Grasshopper"
            }
          ]
        }
      ]
    },
    {
      "name": "Zuhackog",
      "peoples": [
        {
          "name": "Elva Baroni",
          "animals": [
            {
              "name": "Zebrashark"
            }
          ]
        }
      ]
    },
    {
      "name": "Satanwi",
      "peoples": [
        {
          "name": "Elmer Kinoshita",
          "animals": [
            {
              "name": "Weasel"
            }
          ]
        },
        {
          "name": "Ernest Conte",
          "animals": [
            {
              "name": "Asian Elephant"
            }
          ]
        }
      ]
    }
  ]);
});

test('error message if no data', () => {
  const pattern = 'xyz';
  const dataTest = [];

  const t = () => {
    filter(dataTest, pattern);
  };
  expect(t).toThrow("Invalid data: One or more countries are empty or improperly formatted.");
});

test('error message if pattern return no result', () => {
  const pattern = 'xyz';
  const t = () => {
    filter(dataFile, pattern);
  };
  expect(t).toThrow("No matching data found for the given pattern");
});

test('Verify dataType is array', () => {
  const pattern = 'xyz';
  const t = () => {
    filter('toto', pattern);
  };
  expect(t).toThrow("Invalid data: One or more countries are empty or improperly formatted.");
});