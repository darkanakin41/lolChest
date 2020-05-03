export class ChampionMasteries {
  championId: string;
  championLevel: string;
  championPoints: string;
  lastPlayTime: string;
  championPointsSinceLastLevel: string;
  championPointsUntilNextLevel: string;
  chestGranted: boolean;
  tokensEarned: string;
  summonerId: string;
  championName: string;
  championImage: string;
  championRoles: [];

  constructor(fields?: Partial<ChampionMasteries>) {
    if (fields) {
      Object.assign(this, fields);
    }
  }
}
