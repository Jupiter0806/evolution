import ENV from "../env/env";
import Life from "../life/life";
import envManager from "../env/envManager";
import { randomNumber } from "../../utils/random";

export default class Turn {
  private _env: ENV;
  private _originalLives: Life[];

  private _logger: (text: string) => any;

  constructor (env: ENV, originalLives: Life[], logger: (text: string) => any) {
    this._env = env;
    this._originalLives = originalLives;
    this._logger = logger;
  }

  go() {
    let lives: Life[] = this.generateLives();
    lives = this.envFilterLives(lives);
    return lives;
  }

  private envFilterLives(lives: Life[]) {
    return lives.filter(life => this._env.shouldLifeAlive(life))
  }

  private generateLives() {
    let newLives: Life[] = [];

    this._logger('start generating new lives')
    for (let i = 0; i < this._originalLives.length / 2; i++) {
      let parent1 = this.pickALife();
      let parent2 = this.pickALife(this._originalLives.indexOf(parent1));

      newLives = newLives.concat(parent1.date(parent2));
    }

    this._logger('end generating new lives')

    return this._originalLives.concat(newLives);
  }

  private pickALife(avoid?: number) {
    let lifeIndex = randomNumber(0, this._originalLives.length - 1);

    if (avoid !== undefined || avoid !== null) {
      while (lifeIndex === avoid) {
        lifeIndex = randomNumber(0, this._originalLives.length - 1);
      }
    }

    return this._originalLives[lifeIndex];
  }
}