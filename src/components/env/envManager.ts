import ENV from "./env"
import { randomNumber } from "../../utils/random"
import Life from "../life/life";

export default {
  generateEnv() {
    const envId = randomNumber(0, _envs.length - 1);
    let env = _envs.find(item => item.id === envId);

    if (!env) {
      console.warn('Supposed to have env with evnId. will use the first one instead.', {
        envId,
        env,
        envs: _envs
      });
      env = _envs[0];
    }

    return env;
  }
}

const _envs: ENV[] = [
  {
    id: 0,
    // only all the number add includes 0
    shouldLifeAlive: (life: Life) => {
      let alive = true;

      alive = life
        .getGene()
        .toString()
        .split('')
        .map(item => parseInt(item))
        .reduce((prev, curr) => prev + curr, 0)
        .toString()
        .includes('0');

      return alive;
    }
  },
  {
    id: 1,
    // only all the number minus includes 0
    shouldLifeAlive: (life: Life) => {
      let alive = true;

      alive = life
        .getGene()
        .toString()
        .split('')
        .map(item => parseInt(item))
        .reduce((prev, curr) => prev - curr, 0)
        .toString()
        .includes('1');

      return alive;
    }
  },
  {
    id: 2,
    // only all the number product includes 0
    shouldLifeAlive: (life: Life) => {
      let alive = true;

      alive = life
        .getGene()
        .toString()
        .split('')
        .map(item => parseInt(item))
        .reduce((prev, curr) => prev * curr, 0)
        .toString()
        .includes('2');

      return alive;
    }
  },
  {
    id: 3,
    // only all the number divide includes 0
    shouldLifeAlive: (life: Life) => {
      let alive = true;

      alive = life
        .getGene()
        .toString()
        .split('')
        .map(item => parseInt(item))
        .reduce((prev, curr) => prev / (curr || 1), 0)
        .toString()
        .includes('3');

      return alive;
    }
  },
  {
    id: 4,
    // product, sqrt
    shouldLifeAlive: (life: Life) => {
      let alive = true;

      alive = Math.sqrt(
        life
        .getGene()
        .toString()
        .split('')
        .map(item => parseInt(item))
        .reduce((prev, curr) => (prev || 1) * (curr || 1), 0)
      ).toString()
        .includes('4');

      return alive;
    }
  },
  {
    id: 5,
    shouldLifeAlive: (life: Life) => {
      let alive = true;

      const factor = life
        .getGene()
        .toString()
        .split('')
        .map(item => parseInt(item))
        .reduce((prev, curr) => (prev || 1) * (curr || 1), 0);

      const factor2 = randomNumber(0, factor);

      alive = factor2
        .toString()
        .includes('5');

      return alive;
    }
  },
];
