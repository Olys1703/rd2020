import { randomInteger } from './randomInteger';

export function getRandomFromList(list) {
  return list[randomInteger(0, list.length)];
}
