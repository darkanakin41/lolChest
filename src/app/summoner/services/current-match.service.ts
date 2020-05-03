import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {map} from 'rxjs/operators';
import {SummonerService} from './summoner.service';
import {Summoner} from '../models/summoner';

@Injectable({
  providedIn: 'root'
})
export class CurrentMatchService {

  apikey: string;
  baseUrl: string;
  urlSummonerName: string;
  urlChampionMateries: string;
  urlCurrentGame: string;
  summoner: Summoner;
  currentSummoner;

  constructor(private summonerService: SummonerService, public http: HttpClient) {
    this.apikey = environment.APIKEY;
    this.baseUrl = environment.apiEndpoint;
    this.urlSummonerName = 'lol/summoner/v4/summoners/by-name/';
    this.urlChampionMateries = 'lol/champion-mastery/v4/champion-masteries/by-summoner/';
    this.urlCurrentGame = 'lol/spectator/v4/active-games/by-summoner/';
  }

   getCurrentGame(url: string = '', optionalParam?: HttpParams) {
    let httparams = new HttpParams()
      .set('api_key', this.apikey);

    if (optionalParam) {
      optionalParam.keys().forEach((key) => {
        httparams = httparams.set(key, optionalParam.get(key));
      });
    }


    return this.http.get<any>(this.baseUrl + this.urlCurrentGame + url, {params: httparams})
      .pipe(
        map(data => {
          if (data && data.results) {
            return data.results;
          } else {
            return data;
          }
        })
      );

  }

  public getChampionMasteries(url: string = '', optionalParam?: HttpParams) {

    let httparams = new HttpParams()
      .set('api_key', this.apikey);

    if (optionalParam) {
      optionalParam.keys().forEach((key) => {
        httparams = httparams.set(key, optionalParam.get(key));
      });
    }


    // certains endpoints retourne directement la donnée tandis que d'autre sont paginer
    return this.http.get<any>(this.baseUrl + this.urlChampionMateries + url, {params: httparams})
      .pipe(
        map(data => {
          if (data && data.results) {
            return data.results;
          } else {
            return data;
          }
        })
      )
      ;
  }
}
