import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { CreateUserPage } from '../create-user/create-user';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  pushPage: any;

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {
    this.pushPage = CreateUserPage;
  }
  
  //Hace la validacion del usuario y contrasenia
  login() {
	  this.navCtrl.setRoot(HomePage);
  }
	
}

