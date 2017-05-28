import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-search-results',
  templateUrl: 'search-results.html'
})
export class SearchResultsPage {

  rutas: any;
	
  constructor(public navCtrl: NavController) {
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
