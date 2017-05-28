import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { SearchPage } from '../search/search';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  pushPage: any;
	
  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {
    this.pushPage = SearchPage;
  }
  
}
