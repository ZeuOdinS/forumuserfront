import { Component, OnInit, Input, HostListener } from '@angular/core';
declare const $: any;
import { DeviceDetectorModule, DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-home-sponsors',
  templateUrl: './home-sponsors.component.html',
  styleUrls: ['./home-sponsors.component.scss']
})
@HostListener("window:scroll", ["$event"])

export class HomeSponsorsComponent implements OnInit {
  deviceInfo = null;
   isMobile:boolean;
  @Input() langcd :any;
  isTablet: boolean;
  isDesktopDevice: boolean;

  constructor(private deviceService: DeviceDetectorService) {

    this.deviceInfo = this.deviceService.getDeviceInfo();
     this.isMobile = this.deviceService.isMobile();
     this.isTablet = this.deviceService.isTablet();
    this.isDesktopDevice = this.deviceService.isDesktop();


   }

  ngOnInit() {

  }



}
