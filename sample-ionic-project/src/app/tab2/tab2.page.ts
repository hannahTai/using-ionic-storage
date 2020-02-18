import { Component, OnInit } from '@angular/core';
import { IonicStorageService } from '../shared/services/plugins/ionic-storage.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  constructor(private ionicStorageService: IonicStorageService) { }

  savedName$: Observable<string>;

  ngOnInit() {
    this.savedName$ = this.ionicStorageService.getSavedNameData();
  }

}
