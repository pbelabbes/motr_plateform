import {logs} from "./logs";

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseConfig : {
    apiKey: logs.fireBaseAPIKey,
    authDomain: "motr-plateform.firebaseapp.com",
    databaseURL: "https://motr-plateform.firebaseio.com",
    projectId: "motr-plateform",
    storageBucket: "",
    messagingSenderId: "637030443066",
    appId: "1:637030443066:web:c57d5c67a138c2da"
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
