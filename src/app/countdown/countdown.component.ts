import { Component, OnInit, Output, Input, ViewChild, ElementRef, Inject, EventEmitter } from '@angular/core';
import { DOCUMENT, Location } from '@angular/common';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss']
})
export class CountdownComponent {
  finishDate  =  'October 19, 2019 08:30';
  isCustomTemplate = true;
  @Input() langcd :any;
  days;h;
  hours;
  minutes;
  seconds;
  backgroundColor = 'red';
  textColor = 'black';
 constructor(){// Set the date we're counting down to
var countDownDate = new Date("November  19, 2019 08:30:00").getTime();


// Update the count down every 1 second
var x = setInterval(function() {
  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  console.log(location.href.split('/').pop())
  if(location.href.split('/').pop()=="home"){
  document.getElementById("day").innerHTML = days +"";
  document.getElementById("hour").innerHTML = hours +"";
  document.getElementById("minute").innerHTML = minutes +"";
  document.getElementById("seconde").innerHTML = seconds +"";
}
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("ex").innerHTML = "EXPIRED";
    document.getElementById("day").innerHTML ="0";
    document.getElementById("hour").innerHTML = "0";
    document.getElementById("minute").innerHTML = "0";
    document.getElementById("seconde").innerHTML ="0";
   
  }
}, 1000);}



}
