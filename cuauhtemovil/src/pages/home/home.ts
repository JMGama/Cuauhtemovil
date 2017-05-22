import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { SearchPage } from '../search/search';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {

  }
  
  launchLocationPage(){
	  let modal = this.modalCtrl.create(SearchPage);
	  
	  modal.onDidDismiss((location) => {
		  console.log(location);
	  })
	  
	  modal.present();
  }
}
