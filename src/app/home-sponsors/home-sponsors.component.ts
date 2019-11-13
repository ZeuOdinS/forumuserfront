import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home-sponsors',
  templateUrl: './home-sponsors.component.html',
  styleUrls: ['./home-sponsors.component.scss']
})
export class HomeSponsorsComponent implements OnInit {

  @Input() langcd :any;
  
  constructor() { }

  ngOnInit() {
  }

}
