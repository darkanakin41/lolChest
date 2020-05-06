// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiEndpoint: 'https://euw1.api.riotgames.com/',
  APIKEY: 'RGAPI-103fb7e7-79a6-4877-8e41-461acbb7bf36',
  firebase: {
    apiKey: 'AIzaSyDETmk8N6atipIaTfAQvivRBQbBezeAcQo',
    authDomain: 'lol-chest-app.firebaseapp.com',
    databaseURL: 'https://lol-chest-app.firebaseio.com',
    projectId: 'lol-chest-app',
    storageBucket: 'lol-chest-app.appspot.com',
    messagingSenderId: '529090521825',
    appId: '1:529090521825:web:3e91d7923acdf127ca25a0',
    measurementId: 'G-8H9075HTZZ'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
