import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-latestfeed',
  templateUrl: './latestfeed.component.html',
  styleUrls: ['./latestfeed.component.css']
})
export class LatestfeedComponent implements OnInit {
  url = 'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=b4418087a008452daf903ec2800b8409';
  private feeds  = [];

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.httpClient.get(this.url).subscribe((res: any[]) => {
      console.log(res);
      this.feeds = res;
    });
  }

}
