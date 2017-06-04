import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { SearchPage } from '../pages/search/search';
import { SearchResultsPage } from '../pages/search-results/search-results';
import { ResultPage } from '../pages/result/result';

import { Connectivity } from '../providers/connectivity-service/connectivity-service';
import { GoogleMaps } from '../providers/google-maps/google-maps';
import { Network } from '@ionic-native/network';
import { Geolocation } from '@ionic-native/geolocation';

@NgModule({
	declarations: [
		MyApp,
		HomePage,
		LoginPage,
		SearchPage,
		SearchResultsPage,
		ResultPage
	],
	imports: [
		BrowserModule,
		HttpModule,
		IonicModule.forRoot(MyApp)
	],
	bootstrap: [IonicApp],
	entryComponents: [
		MyApp,
		HomePage,
		LoginPage,
		SearchPage,
		SearchResultsPage,
		ResultPage
	],
	providers: [
		StatusBar,
		SplashScreen,
		Connectivity,
      GoogleMaps,
		Network,
      Geolocation,
	{provide: ErrorHandler, useClass: IonicErrorHandler},
    
	]
})
export class AppModule {}
