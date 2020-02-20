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

## Find Stored Datas
- In terminal, run `brew cask install db-browser-for-sqlite` to download DB Browser for SQLite.

### Android
- In Android Studio's Device File Explorer, save [/data/data/<*appId*>/databases/_ionicstorage] to root.
- Open the saved file with DB Browser for SQLite.
- The stored item and value saved as key-value pairs in SQLite.

### iOS
- When running on Xcode, the first line in console output shows something like below. It helps identifying device and application's UUID.
  ```
  2020-02-20 15:09:30.894036+0800 App[46739:596680] DiskCookieStorage changing policy from 2 to 0, 
  cookie file: file:///Users/<user>/Library/Developer/CoreSimulator/Devices/<Device UUID>/data/
  Containers/Data/Application/<Application UUID>/Library/Cookies/<appId>.binarycookies
  ```
- Open [~/Library/Developer/CoreSimulator/Devices/<*Device UUID*>/data/Containers/Data/Application/<*Application UUID*>/Library/LocalDatabase/_ionicstorage] with DB Browser for SQLite.
- The stored item and value saved as key-value pairs in SQLite.

### Web - Chrome
- Open Chrome DevTools.
- Application > Storage > IndexedDB > _ionicstorage.
- The stored item and value saved as key-value pairs in IndexedDB.

## Run on Capacitor
- Run `ionic cap sync` to add the plugin.
- Run `ionic serve`.
- Run `ionic cap run android -l --external`.
- Run `ionic cap run ios -l`.

# Download this project
- cd to [sample-ionic-project].
- `npm i`.
- `ionic build`.
- Run `ionic cap add android` and `ionic cap add ios`.
- Run `ionic serve`, `ionic cap run android -l --external`, `ionic cap run ios -l`.