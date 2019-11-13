import { Component, OnInit, OnDestroy, Output } from "@angular/core";
import noUiSlider from "nouislider";
import { Router, ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: "app-index",
  templateUrl: "index.component.html"
})
export class IndexComponent {
  isCollapsed = true;
  focus;
  focus1;
  lang = true; //true(français) false(anglais)
  focus2;
  date = new Date();
  pagination = 3;
  pagination1 = 1;
  constructor(private router:Router, private route: ActivatedRoute) { }
  scrollToDownload(element: any) {
    element.scrollIntoView({ behavior: "smooth" });
  }
  ngOnInit() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.add("index-page");

    var slider = document.getElementById("sliderRegular");
    this.route.paramMap
    .pipe(map(() => { window.history.state; }));
    console.log(history.state.langcd);
    this.lang=history.state.langcd;

   /* noUiSlider.create(slider, {
      start: 40,
      connect: false,
      range: {
        min: 0,
        max: 100
      }
    });

    var slider2 = document.getElementById("sliderDouble");

    noUiSlider.create(slider2, {
      start: [20, 60],
      connect: true,
      range: {
        min: 0,
        max: 100
      }
    });
  }*/}
  ngOnDestroy() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.remove("index-page");
  }
  changeLangue(x) {
    console.log(x);
    if(x=='FR')
    this.lang= true;
    else 
    this.lang=false;

  }
  registerEtudiant(i) {
    this.router.navigateByUrl('/registeretudiant', { state: {langcd:i}});
  }
  registerEmploye(i) {
    this.router.navigateByUrl('/registeremploye', { state: {langcd:i}});
  }
  registerEntreprise(i) {
    this.router.navigateByUrl('/registerentreprise', { state: {langcd:i}});
  }


}
