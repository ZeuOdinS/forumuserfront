import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home-forum',
  templateUrl: './home-forum.component.html',
  styleUrls: ['./home-forum.component.scss']
})
export class HomeForumComponent implements OnInit {

  @Input() langcd :any;
  
  constructor() { }

  ngOnInit() {
  }

}
