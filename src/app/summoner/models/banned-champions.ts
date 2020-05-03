export class BannedChampions {
  championId: string;
  teamId: string;
  pickTurn: string;
  championName: string;
  championImage: string;

  constructor(fields?: Partial<BannedChampions>) {
    if (fields) {
      Object.assign(this, fields);
    }
  }
}
