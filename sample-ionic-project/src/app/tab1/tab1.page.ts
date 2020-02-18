import { Component, OnInit } from '@angular/core';
import { IonicStorageService, IonicStorageKeys } from '../shared/services/plugins/ionic-storage.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  constructor(private ionicStorageService: IonicStorageService) { }

  savedName$: Observable<string>;

  ngOnInit() {
    this.savedName$ = this.ionicStorageService.getSavedNameData();
  }

  onBtnClick(insertedName: string) {
    this.ionicStorageService.setSavedNameData(insertedName);
  }

}
