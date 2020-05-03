import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import {first} from 'rxjs/operators';


const routes: Routes = [
  { path: '',
    loadChildren: () =>
        import('./summoner/summoner.module').then( (m) => m.SummonerModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
