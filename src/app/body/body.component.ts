import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { AppModule } from '../app.module';
import { NgModule } from '@angular/compiler/src/core';
import { HttpClient } from '@angular/common/http';
import {  CarouselModule, WavesModule, } from 'angular-bootstrap-md';


@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  url = 'https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=b4418087a008452daf903ec2800b8409';
  private feeds  = [];

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.httpClient.get(this.url).subscribe((res: any[]) => {
      console.log(res);
      this.feeds = res;
    });
  }
}
