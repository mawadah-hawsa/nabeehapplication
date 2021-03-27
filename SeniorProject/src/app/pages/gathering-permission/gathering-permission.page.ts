import { Component, ViewChild, ElementRef } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import {
  AngularFirestore,
  AngularFirestoreCollection
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { } from "googlemaps";
import { Plugins } from '@capacitor/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
const { Geolocation } = Plugins;

declare var google;

@Component({
  selector: 'app-gathering-permission',
  templateUrl: './gathering-permission.page.html',
  styleUrls: ['./gathering-permission.page.scss'],
})
export class GatheringPermissionPage {

  // Firebase Data
  locations: Observable<any>;
  locationsCollection: AngularFirestoreCollection<any>;


  // Map related
  @ViewChild('map') mapElement: ElementRef;
  map: any;
  markers = [];

  // Misc
  isTracking = false;
  watch: string;
  user = null;

  constructor(private afAuth: AngularFireAuth, private afs: AngularFirestore) {
    this.anonLogin();
  }

  ionViewWillEnter() {
    this.loadMap();
  }

  // Perform an anonymous login and load data
  anonLogin() {
    this.afAuth.signInAnonymously().then(res => {
      this.user = res.user;

      this.locationsCollection = this.afs.collection(
        `locations/${this.user.uid}/track`,
        ref => ref.orderBy('timestamp')
      );

      // Make sure we also get the Firebase item ID!
      this.locations = this.locationsCollection.snapshotChanges().pipe(
        map(actions =>
          actions.map(a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return { id, ...data };
          })
        )
      );
      // Update Map marker on every change
      this.locations.subscribe(locations => {
        this.updateMap(locations);
      });
    });

  }

  // Initialize a blank map
  loadMap() {
    let latLng = new google.maps.LatLng(21.485010, 39.192767);

    let mapOptions = {
      center: latLng,
      zoom: 5
      //mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

  }

  // Use Capacitor to track our geolocation
  startTracking() {
    this.isTracking = true;
    this.watch = Geolocation.watchPosition({}, (position, err) => {
      if (position) {
        this.addNewLocation(
          position.coords.latitude,
          position.coords.longitude,
          position.timestamp
        );
      }
    });
  }

  // Unsubscribe from the geolocation watch using the initial ID
  stopTracking() {
    Geolocation.clearWatch({ id: this.watch }).then(() => {
      this.isTracking = false;
    });
  }

  // Save a new location to Firebase and center the map
  addNewLocation(lat, lng, timestamp) {
    this.locationsCollection.add({
      lat,
      lng,
      timestamp
    });

    let position = new google.maps.LatLng(lat, lng);
    this.map.setCenter(position);
    this.map.setZoom(5);
  }

  // Delete a location from Firebase
  deleteLocation(pos) {
    this.locationsCollection.doc(pos.id).delete();
  }

  // Redraw all markers on the map
  updateMap(locations) {
    // Remove all current marker
    this.markers.map(marker => marker.setMap(null));
    this.markers = [];

    for (let loc of locations) {
      let latLng = new google.maps.LatLng(loc.lat, loc.lng);

      let marker = new google.maps.Marker({
        map: this.map,
        animation: google.maps.Animation.DROP,
        position: latLng
      });
      this.markers.push(marker);
    }
  }

  /*
  redrawPath() {
    if (this.currentMapTrack) {
      this.currentMapTrack.setMap(null);
    }
  
    
      this.currentMapTrack = new google.maps.Polyline({
        geodesic: true,
        strokeColor: '#ff00ff',
        strokeOpacity: 1.0,
        strokeWeight: 3
      });
      this.currentMapTrack.setMap(this.map);
    
  }
  */

  //----------DIRECTIONS
  /*
  createDirectionForm() {
    this.directionForm = this.fb.group({
      destination: ['', Validators.required]
    });
  }
  
  ngAfterViewInit(): void {
    this.geolocation.getCurrentPosition().then((resp) => {
      this.currentLocation.lat = resp.coords.latitude;
      this.currentLocation.lng = resp.coords.longitude;
    });
  
    const map = new google.maps.Map(this.mapElement.nativeElement, {
      zoom: 7,
      center: {lat: 41.85, lng: -87.65}
    });
    this.directionsDisplay.setMap(map);
  }
  
  calculateAndDisplayRoute(formValues) {
    const that = this;
    this.directionsService.route({
      origin: this.currentLocation,
      destination: formValues.destination,
      travelMode: 'DRIVING'
    }, (response, status) => {
      if (status === 'OK') {
        that.directionsDisplay.setDirections(response);
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    });
  }
  */


  /* import { Component, OnInit } from '@angular/core';
  import { ViewChild } from '@angular/core';
  import { Plugins } from '@capacitor/core';
  import { } from "googlemaps";
  const { Geolocation } = Plugins;
  
  //declare var google: any;
  
  @Component({
    selector: 'app-gathering-permission',
    templateUrl: './gathering-permission.page.html',
    styleUrls: ['./gathering-permission.page.scss'],
  })
  export class GatheringPermissionPage implements OnInit {
  
    public map: google.maps.Map;
    markers = false;
    marker: google.maps.Marker;
    @ViewChild('map', null) mapRef: any;
  
    constructor() { }
  
    ngOnInit() {
      this.initMap();
    }
  
    initMap(){
      
      const map = new google.maps.Map(
        document.getElementById("map") as HTMLElement,
        {
          zoom: 13,
          center: { lat: 21.485010, lng: 39.192767 },
        }
      );
    
      map.addListener("click", (e) => {
        if(!this.markers){
          this.placeMarkerAndPanTo(e.latLng, map);
         
          this.markers = true;
        } else {
          this.marker.setPosition(e.latLng);
          console.log(e.latLng);
        }
      });
    }
    
    placeMarkerAndPanTo(latLng: google.maps.LatLng, map: google.maps.Map) {
       this.marker = new google.maps.Marker({
        position: latLng,
        map: map
       });
      map.panTo(latLng);
    }
  }

  */

}

