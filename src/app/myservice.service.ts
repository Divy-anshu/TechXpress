import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor (private http: Http) {
  }
  getUser() {
  }

}
