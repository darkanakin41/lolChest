import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {map} from 'rxjs/operators';
import {cors} from 'cors';

const httpOptions = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Origin': 'https://euw1.api.riotgames.com',
    'content-type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class SummonerService {

  apikey: string;
  baseUrl: string;
  urlSummonerName: string;
  urlChampionMateries: string;
  urlLeague: string;
  urlTft: string;
  leagueUrl: string;

  constructor(public http: HttpClient) {

    this.apikey = environment.APIKEY;
    this.baseUrl = environment.apiEndpoint;
    this.urlSummonerName = 'lol/summoner/v4/summoners/by-name/';
    this.urlChampionMateries = 'lol/champion-mastery/v4/champion-masteries/by-summoner/';
    this.urlLeague = 'lol/league/v4/entries/by-summoner/';
    this.urlTft = 'tft/league/v1/entries/by-summoner/';
  }

  public getSummoner(url: string = '', optionalParam?: HttpParams) {
    const httpheaders = new HttpHeaders().set('Access-Control-Allow-Origin', '*');
    let httparams = new HttpParams()
      .set('api_key', this.apikey);

    if (optionalParam) {
      optionalParam.keys().forEach((key) => {
        httparams = httparams.set(key, optionalParam.get(key));
      });
    }
    // const options = {
    //   headers : new HttpHeaders().set('Access-Control-Allow-Origin', '*'),
    //   params : new HttpParams().set('api_key', this.apikey)
    // };
    return this.http.get<any>(this.baseUrl + this.urlSummonerName + url,
      // options
      {params: httparams}
    )
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

  public getChampionMasteries(url: string = '', optionalParam?: HttpParams) {

    let httparams = new HttpParams()
      .set('api_key', this.apikey);

    if (optionalParam) {
      optionalParam.keys().forEach((key) => {
        httparams = httparams.set(key, optionalParam.get(key));
      });
    }


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

  public getLeague(url: string = '', optionalParam?: HttpParams) {

    let httparams = new HttpParams()
      .set('api_key', this.apikey);

    if (optionalParam) {
      optionalParam.keys().forEach((key) => {
        httparams = httparams.set(key, optionalParam.get(key));
      });
    }

    return this.http.get<any>(this.baseUrl + this.urlLeague + url, {params: httparams})
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

  public getTft(url: string = '', optionalParam?: HttpParams) {

    let httparams = new HttpParams()
      .set('api_key', this.apikey);

    if (optionalParam) {
      optionalParam.keys().forEach((key) => {
        httparams = httparams.set(key, optionalParam.get(key));
      });
    }
    return this.http.get<any>(this.baseUrl + this.urlTft + url, {params: httparams})
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
