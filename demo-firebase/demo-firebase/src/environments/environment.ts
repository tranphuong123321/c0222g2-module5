// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiUrl: 'http://localhost:8080',
  firebaseConfig: {
    apiKey: "AIzaSyCzUow8XTp5OGzvDD-imdcPEy-smoyN3yU",
    authDomain: "fir-firebase-42c1a.firebaseapp.com",
    projectId: "fir-firebase-42c1a",
    storageBucket: "fir-firebase-42c1a.appspot.com",
    messagingSenderId: "269268280263",
    appId: "1:269268280263:web:11932e56f7fc340f872fe2",
    measurementId: "G-CWLLPY141D"
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
