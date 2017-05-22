import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController) {

  }
	
  //Hace la validacion del usuario y contrasenia
  login() {
	  this.navCtrl.setRoot(HomePage);
  }
	
}

