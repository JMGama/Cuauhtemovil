import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { ResultPage } from '../result/result';

@Component({
  selector: 'page-search-results',
  templateUrl: 'search-results.html'
})
export class SearchResultsPage {

  rutas: any;

  pushPage: any;
	
  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {
	 this.pushPage = ResultPage;
    this.rutas = [
		 '10 m',
		 '50 m',
		 '120 m',
		 '1 km',
		 '1.2 km',
		 '2 km',
		 '2.4 km',
		 '3 km'
	 ]
  }

}
