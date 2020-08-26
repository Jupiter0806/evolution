import { v1 as uuid } from 'uuid';

export default class Life {
  private _id: string;
  private _gene: number;

  constructor (id: string, gene: number) {
    this._id = id;
    this._gene = gene;
  }

  toString() {
    return this._gene;
  }

  getGene() {
    return this._gene;
  }

  /**
   * date a partner to get next generation
   * 
   * @param partner 
   */
  date(partner: Life) {
    const newLives: Life[] = [];

    this.exchangeGene(partner).forEach(gene => newLives.push(new Life(uuid(), gene)));

    return newLives;
  }

  private exchangeGene(partner: Life) {
    const newGenes: number[] = [];

    const fragments1 = this.getGeneFragments();
    const fragments2 = partner.getGeneFragments();
    
    fragments1.forEach(item1 => {
      fragments2.forEach(item2 => {
        newGenes.push(parseInt(item1 + item2))
      })
    })

    return newGenes;
  }

  getGeneFragments() {
    const gene_str = this._gene.toString();
    const fragments = [
      gene_str.substring(0, gene_str.length / 2),
      gene_str.substring(gene_str.length / 2)
    ];

    return fragments;
  }
}