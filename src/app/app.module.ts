import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot({mode : "ios"}), AppRoutingModule, HttpClientModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],

  
})
export class AppModule {}

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
//const firebaseConfig = {
  //apiKey: "AIzaSyAvFv0YnogQgbRV-xigspLc3LIun8vUhEg",
  //authDomain: "ionic-travel-8b58c.firebaseapp.com",
  //projectId: "ionic-travel-8b58c",
  //storageBucket: "ionic-travel-8b58c.appspot.com",
  //messagingSenderId: "107084519709",
  //appId: "1:107084519709:web:250d63b6d58aa9bbc7e9f4",
 //measurementId: "G-XYY5G987EH"
//};

// Initialize Firebase
//const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);