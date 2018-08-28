import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [
    trigger('myanimation', [
        state('hide', style({
              opacity: 0,
        })),
        state('show', style({
              opacity: 1,
        })),
        transition('hide <=> show', animate('0.5s ease-in'))
    ])
  ]
})
export class HeaderComponent implements OnInit {
  state = 'hide';
  constructor(private myser: MyserviceService) { }

  ngOnInit() {
  }
  showitems(event) {
    document.getElementById('items').style.visibility = 'visible';
    this.state = 'show';
  }
  hideitems(event) {
    document.getElementById('items').style.visibility = 'hidden';
    this.state = 'hide';
  }

}
