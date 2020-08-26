import { v1 as uuid } from 'uuid';
import Life from './life';
import { randomNumber } from '../../utils/random';

export default {
  generateLives(count: number) {
    const lives: Life[] = [];
    for (let i = 0; i < count; i++)
      lives.push(new Life(
        uuid(),
        randomNumber(0, Number.MAX_SAFE_INTEGER / 100)
      ));
    return lives;
  }
}