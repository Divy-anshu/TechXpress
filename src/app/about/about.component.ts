import { Component, OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
  }
  onClickSubmit(data) {
    this.httpClient.get('192.168.43.63/practice/techxpess.php?name=' + data.username + '&email=' + data.email)
    .subscribe((res: any[]) => {
      console.log(res);
      alert(res);
    });
    alert('Welcome ' + data.username + '! thanks for joining..\n We\'ll contact you soon.');
 }


}
