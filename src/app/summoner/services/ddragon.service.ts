import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {map} from 'rxjs/operators';
import {cors} from 'cors';
import { version } from 'process';

const httpOptions = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Origin': 'http://ddragon.leagueoflegends.com',
    'content-type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class DdragonService {

  apiVersionUrl: string;
  lolVersion : string;

  constructor(public http: HttpClient) {
    this.apiVersionUrl = 'https://ddragon.leagueoflegends.com/api/versions.json'
  }

  public getVersion(optionalParam?: HttpParams) {
 //    this.getDataResult(this.apiVersionUrl, optionalParam ).subscribe(lolVersion => {
  //          this.lolVersion = lolVersion[0];
  //          console.log(this.lolVersion);
  //  })
    return '10.18.1';
  }


  public getDataResult(apiVersionUrl: string , optionalParam?: HttpParams) {
    let httparams = new HttpParams();
    if (optionalParam) {
      optionalParam.keys().forEach((key) => {
        httparams = httparams.set(key, optionalParam.get(key));
      });
    }
    return this.http.get<any>(this.apiVersionUrl, {params: httparams})
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
