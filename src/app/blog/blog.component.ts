import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
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
