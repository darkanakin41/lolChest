import {Component, OnInit, Output} from '@angular/core';
import {Summoner} from '../../models/summoner';
import {ChampionMasteries} from '../../models/champion-masteries';
import * as data from '../../../../assets/lol/champions.json';
import {SummonerService} from '../../services/summoner.service';
import {HttpClient} from '@angular/common/http';
import {FormBuilder} from '@angular/forms';
import {CurrentMatchService} from '../../services/current-match.service';
import {CurrentMatch} from '../../models/current-match';
import {CurrentGameParticipant} from '../../models/current-game-participant';

@Component({
  selector: 'app-current-match',
  templateUrl: './current-match.component.html',
  styleUrls: ['./current-match.component.scss']
})
export class CurrentMatchComponent implements OnInit {
  currentMatch: CurrentMatch;
  summoner: Summoner;
  champions: ChampionMasteries[];
  @Output() name: string;
  products: any = (data as any).default;
  constructor(
    private summonerService: SummonerService,
    private currentMatchService: CurrentMatchService,
    private http: HttpClient,
    private fb: FormBuilder
  ) {
  }

  value = 'Smodjhog';

  getCurrentGame() {
    this.summonerService.getSummoner(this.value.replace(' ', '+')).subscribe(summoner => {
      this.summoner = summoner;
      this.currentMatchService.getCurrentGame(this.summoner.id).subscribe(currentMatch => {
        currentMatch.participants.forEach(participant => {
          participant.championName = this.products.data[participant.championId].name;
          participant.championImage = this.products.data[participant.championId].id + '_0.jpg';
          this.summonerService.getChampionMasteries(participant.summonerId).subscribe(champions => {
            champions.forEach(champion => {
              if (participant.championId === champion.championId) {
                participant.chest = champion.chestGranted;
              }
            });
          });
          this.currentMatch = currentMatch;
        });
      });
    });
  }

  ngOnInit() {
    this.getCurrentGame();
  }

  onEnter(value: string) {
    this.value = value;
    this.getCurrentGame();
  }
}
