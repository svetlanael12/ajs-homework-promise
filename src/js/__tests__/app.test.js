import GameSavingLoader from '../gameSavingLoader';

test('should return obj', async () => {
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
  const result = await GameSavingLoader.load();
  return expect(result).toEqual(expected);
});
