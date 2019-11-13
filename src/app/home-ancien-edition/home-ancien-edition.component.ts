import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home-ancien-edition',
  templateUrl: './home-ancien-edition.component.html',
  styleUrls: ['./home-ancien-edition.component.scss']
})
export class HomeAncienEditionComponent implements OnInit {

  @Input() langcd :any;
  
  constructor() { }

  ngOnInit() {
  }

}
