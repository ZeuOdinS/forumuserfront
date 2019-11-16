import { Component, OnInit, OnDestroy, Input } from "@angular/core";
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: "app-Temoignage",
  templateUrl: "temoignage.component.html"
})
export class TemoignageComponent {
  isCollapsed = true;
  @Input() langcd :any;
  deviceInfo: any;
  isMobile: boolean;
  isDesktopDevice: boolean;
  constructor(private deviceService: DeviceDetectorService) {

    this.deviceInfo = this.deviceService.getDeviceInfo();
    this.isDesktopDevice = this.deviceService.isDesktop();

  }

  ngOnInit() {}
}
