// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyAKLlcqwm1idT9pZnebKKHvkiimtpxIErQ",
    authDomain: "map-demo-1536849323418.firebaseapp.com",
    databaseURL: "https://map-demo-1536849323418-9c341.firebaseio.com",
    projectId: "map-demo-1536849323418",
    storageBucket: "map-demo-1536849323418.appspot.com",
    messagingSenderId: "28252470541"
  },
  agmConfig: {
    apiKey: "AIzaSyAKLlcqwm1idT9pZnebKKHvkiimtpxIErQ",
    libraries: ['places'],
    language: 'en-US'
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
