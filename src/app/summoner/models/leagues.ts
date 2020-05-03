import {BannedChampions} from './banned-champions';
import {ObserverId} from './observer-id';
import {CurrentGameParticipant} from './current-game-participant';
import {Miniseries} from './miniseries';

export class Leagues {
  leagueId: string;
  queueType: string;
  tier: string;
  rank: string;
  summonerId: string;
  summonerName: string;
  leaguePoints: string;
  wins: string;
  losses: string;
  veteran: string;
  inactive: string;
  freshBlood: string;
  hotStreak: string;
  miniSeries: Miniseries;
}
