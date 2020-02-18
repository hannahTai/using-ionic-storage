# Using Ionic Storage
A brief note for using Ionic Storage.

## Before You Start
Make sure your Ionic project could run on browser and emulator.
- Run `ionic serve`
- Run `ionic cap run android -l --external`. (Run `ionic build` at least once before.)
- Run `ionic cap run ios -l`. (Run `ionic build` at least once before.)

## Install
- cd to [sample-ionic-project].
- Run `ionic cordova plugin add cordova-sqlite-storage`.
- Run `npm install --save @ionic/storage`.

## Register
- Open [sample-ionic-project/src/app/app.module.ts].
- `import { IonicStorageModule } from '@ionic/storage';`.
- Add `IonicStorageModule.forRoot()` in imports.

## Usage
- `import { Storage } from '@ionic/storage';`.
- `constructor(private storage: Storage) { }`.
- Call Storage's method.
  ```
  storage.set('name', 'Max');
  storage.get('name').then((val) => { 
    console.log('Your name is', val); 
  });
  ```

## Run on Capacitor
- Run `ionic cap sync` to add the plugin.
- Run `ionic serve`.
- Run `ionic cap run android -l --external`.
- Run `ionic cap run ios -l`.

# Download this project
It's probably easier to just add android and ios for capacitor again.
- cd to [sample-ionic-project].
- `npm i`.
- Remove [sample-ionic-project/android/] and [sample-ionic-project/ios/] folders.
- `ionic build`.
- Run `ionic cap add android` and `ionic cap add ios`.
- Run `ionic serve`, `ionic cap run android -l --external`, `ionic cap run ios -l`.