import GameSavingLoader from '../gameSavingLoader.js';

test('should return obj', () => {
  const expected = {
    id: 9,
    created: 1546300800,
    userInfo: {
      id: 1,
      name: 'Hitman',
      level: 10,
      points: 2000,
    },
  };

  return GameSavingLoader.load().then((result) => expect(result).toEqual(expected));
});