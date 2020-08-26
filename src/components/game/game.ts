import envManager from "../env/envManager";
import Life from "../life/life";
import lifeHelper from "../life/lifeHelper";
import Turn from "../turn/turn";

export default class Game {
  // how many runs this game will take
  // every run will generate a env randomly
  private _runs: number;

  // how many turns a run has
  private _turns_per_run: number;

  // how many lives will be generate before the first turn
  private _base_life_count: number;

  private _lives: Life[];

  private _debugMode = false;

  constructor(runs: number, turnsPerRun: number, baseLifeCount: number) {
    this._runs = runs;
    this._turns_per_run = turnsPerRun;
    this._base_life_count = baseLifeCount;

    this._lives = lifeHelper.generateLives(baseLifeCount);
  }

  // start this game
  starts() {
    console.log('Start Game...')
    console.log('Base lives count', this._base_life_count);

    this._debugMode && console.log('Base lives', this._lives);

    for (let i = 0; i < this._runs; i++) {
      const runLogger = (text: string) => console.log(`[Run No. ${i + 1} of ${this._runs}] ${text}`);

      runLogger('starts...')
      const env = envManager.generateEnv();
      runLogger('generated env ' + env.id);

      for (let j = 0; j < this._turns_per_run; j++) {
        const turnLogger = (text: string) => runLogger(`[Turn No. ${j + 1} of ${this._turns_per_run}] ${text}`);
        turnLogger(`life count: ${this._lives.length}`);
        this._debugMode && turnLogger(`${this._lives}`);

        turnLogger('start...');
        const turn = new Turn(env, this._lives, runLogger);
        this._lives = turn.go();
        turnLogger('end');

        turnLogger(`life count: ${this._lives.length}`);
        this._debugMode && turnLogger(`${this._lives}`);
      }
      runLogger('end');
    }

    console.log('Game Over')
  }

  debug() {
    this._debugMode = true;
  }
}

function turnGo() {
  console.log('do something');
}