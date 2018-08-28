import { Component, OnInit, AfterViewInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  // url = 'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=b4418087a008452daf903ec2800b8409';
  private feeds  = [];
  url: string;
     constructor(private httpClient: HttpClient, private route: ActivatedRoute) {
      }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.url = params['id'];
      this.httpClient.get(this.url).subscribe((res: any[]) => {
        console.log(res);
        this.feeds = res;
      });
   });
  }
}

