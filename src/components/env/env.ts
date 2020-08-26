// export default class ENV {
//   private _id: number;

//   constructor (id: number) {
//     this._id = id;
//   }

//   shouldLifeDie(life: any) {
//     return 
//   }
// }

export default interface ENV {
  id: number;

  shouldLifeAlive: (life: any) => boolean;
}
