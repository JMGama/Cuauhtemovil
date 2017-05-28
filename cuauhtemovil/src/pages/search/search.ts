import { NavController, Platform, ViewController } from 'ionic-angular';
import { Component, ElementRef, ViewChild, NgZone } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation';
import { GoogleMaps } from '../../providers/google-maps/google-maps';
import { SearchResultsPage } from '../search-results/search-results';

declare var google;

@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {
	
	 pushPage: any;
	
    @ViewChild('map') mapElement: ElementRef;
    @ViewChild('pleaseConnect') pleaseConnect: ElementRef;
 
    latitude: number;
    longitude: number;
    autocompleteService: any;
    placesService: any;
    query: string = '';
    places: any = [];
    searchDisabled: boolean;
    saveDisabled: boolean;
    location: any;  
 
	 public event = {
     timeStarts: '14:00'
    }
	 
    constructor(public navCtrl: NavController, public zone: NgZone, public maps: GoogleMaps, public platform: Platform, public geolocation: Geolocation, public viewCtrl: ViewController) {
		  this.pushPage = SearchResultsPage;
        this.searchDisabled = true;
        this.saveDisabled = true;
    }
 
    ionViewDidLoad(): void {
 
        let mapLoaded = this.maps.init(this.mapElement.nativeElement, this.pleaseConnect.nativeElement).then(() => {
 
            this.autocompleteService = new google.maps.places.AutocompleteService();
            this.placesService = new google.maps.places.PlacesService(this.maps.map);
            this.searchDisabled = false;
 	
        }); 
 		  
    }
 
    selectPlace(place){
 
        this.places = [];
 
        let location = {
            lat: null,
            lng: null,
            name: place.name
        };
 
        this.placesService.getDetails({placeId: place.place_id}, (details) => {
 
            this.zone.run(() => {
 
                location.name = details.name;
                location.lat = details.geometry.location.lat();
                location.lng = details.geometry.location.lng();
                this.saveDisabled = false;
					
					 new google.maps.Marker({
						position: {lat: location.lat, lng: location.lng},
						map: this.maps.map,
					   title: 'Hello World!'
					 });
					
                this.maps.map.setCenter({lat: location.lat, lng: location.lng}); 
 
                this.location = location;
 
            });
 
        });
 
    }
 
    searchPlace(){
 
        this.saveDisabled = true;
 
        if(this.query.length > 0 && !this.searchDisabled) {
 
            let config = {
                types: ['geocode'],
                input: this.query
            }
 
            this.autocompleteService.getPlacePredictions(config, (predictions, status) => {
 
                if(status == google.maps.places.PlacesServiceStatus.OK && predictions){
 
                    this.places = [];
 
                    predictions.forEach((prediction) => {
                        this.places.push(prediction);
                    });
                }
 
            });
 
        } else {
            this.places = [];
        }
 
    }
}