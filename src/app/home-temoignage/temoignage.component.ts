import { Component, OnInit, OnDestroy, Input } from "@angular/core";
import Chart from "chart.js";

@Component({
  selector: "app-Temoignage",
  templateUrl: "temoignage.component.html"
})
export class TemoignageComponent {
  isCollapsed = true;
  @Input() langcd :any;
  constructor() {}

  ngOnInit() {}
}
