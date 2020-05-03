import {CurrentGameParticipant} from './current-game-participant';
import {ObserverId} from './observer-id';
import {BannedChampions} from './banned-champions';

export class CurrentMatch {
  gameId: string;
  gameType: string;
  gameStartTime: string;
  mapId: string;
  gameLength: string;
  platformId: string;
  gameMode: string;
  bannedChampions: BannedChampions[];
  gameQueueConfigId: string;
  Observer: ObserverId;
  participants: CurrentGameParticipant[];

  constructor(fields?: Partial<CurrentMatch>) {
    if (fields) {
      Object.assign(this, fields);
    }
  }
}
