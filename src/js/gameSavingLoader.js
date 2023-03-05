import GameSaving from './gameSaving';
import read from './reader';
import json from './parser';

export default class GameSavingLoader {
  static load() {
    return read()
      .then((result) => json(result))
      .then((response) => new GameSaving(JSON.parse(response)));
  }
}
