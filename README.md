## map-demo

### after clone:
1. install node modules and plugins, check documentation if packages require variables/support packages if errors occur
  ```
  $ npm install
  ```
  
2. generate keystore:
```
$ keytool -genkey -v -keystore <MY-RELEASE-KEY>.keystore -alias <KEY_ALIAS> -keyalg RSA -keysize 2048 -validity 10000
```

3. If you need google-services.json or GoogleService-Info.plist from Firebase, generate them now
  - for android, use: 
  ```
  $ keytool -exportcert -list -v -alias <KEYNAME> -keystore <local/path/to/keystore.keystore>
  ```
  
4. add enviroments
  - /app/environments/environment.ts
  - /app/environments/environment.prod.ts
    - both need api keys in this format
    ```
    environment: {

      production: true|false,

      //WEB APP config from Firebase console
      firebase: {
        apiKey: 
        authDomain:
        databaseUrl:
        storageBucket:
        messagingSenderId:
      },

      //should match Firebase api, and specify libraries and languages
      agmConfig: {
        apiKey:
        libraries: []
        languages: 
      },
      //TAKEN FROM google-services.json
      googlePlusConfig: {
        webClientId:
        offline: true,
        scopes:
      }
    }
    ```

### Changelog
___
- **10/14/2018**
  - added menu close toggle
  - added fade and scaling-height animations
  - added dynamic login/settings tab
  - google authentication working
  - added email login, registration (still testing)
  - added `<ng-content>` to `<login-cmp>` and `<register-cmp>` to have authentication button logic and template in the AuthPage
