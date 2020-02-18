import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Subject, Observable } from 'rxjs';

export enum IonicStorageKeys {
    SAVED_NAME,
}

@Injectable({
    providedIn: 'root'
})
export class IonicStorageService {

    savedNameSubject: Subject<string>;
    savedName$: Observable<string>;

    constructor(private storage: Storage) {
        this.savedNameSubject = new Subject<string>();
        this.savedName$ = this.savedNameSubject.asObservable();
    }

    setSavedNameData(value: string) {
        this.setData(IonicStorageKeys.SAVED_NAME, value).then(x => {
            this.savedNameSubject.next(x);
        });
    }

    getSavedNameData() {
        this.getData(IonicStorageKeys.SAVED_NAME).then(x => {
            this.savedNameSubject.next(x);
        });
        return this.savedName$;
    }

    async setData(key: IonicStorageKeys, value: any) {
        const keyName = IonicStorageKeys[key];
        return this.storage.set(keyName, value).then((val) => {
            console.log(`You set key=${keyName} in the ionic storage. Value=${JSON.stringify(val)}`);
            return val;
        });
    }

    async getData(key: IonicStorageKeys) {
        const keyName = IonicStorageKeys[key];
        return this.storage.get(keyName).then((val) => {
            console.log(`You got key=${keyName} from the ionic storage. Value=${JSON.stringify(val)}`);
            return val;
        });
    }

}
