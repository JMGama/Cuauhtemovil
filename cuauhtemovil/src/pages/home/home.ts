import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { SearchPage } from '../search/search';
import { UploadPage } from '../upload/upload';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  pushSearchPage: any;
  pushUploadPage: any;
	
  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {
    this.pushSearchPage = SearchPage;
	  this.pushUploadPage = UploadPage;
  }
  
}
