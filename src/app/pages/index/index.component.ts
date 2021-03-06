import { Component, OnInit, OnDestroy, Output } from "@angular/core";
import noUiSlider from "nouislider";
import { Router, ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { DeviceDetectorService } from 'ngx-device-detector';

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
  deviceInfo: any;
  isMobile: any;
  isTablet: any;
  isDesktopDevice: any;
  constructor(private router:Router, private route: ActivatedRoute,private deviceService: DeviceDetectorService) {


      this.deviceInfo = this.deviceService.getDeviceInfo();
       this.isMobile = this.deviceService.isMobile();



   }
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

 }
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
