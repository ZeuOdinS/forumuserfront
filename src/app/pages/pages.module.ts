import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { ProgressbarModule } from "ngx-bootstrap/progressbar";
import { TooltipModule } from "ngx-bootstrap/tooltip";
import { CollapseModule } from "ngx-bootstrap/collapse";
import { TabsModule } from "ngx-bootstrap/tabs";
import { PaginationModule } from "ngx-bootstrap/pagination";
import { AlertModule } from "ngx-bootstrap/alert";
import { BsDatepickerModule } from "ngx-bootstrap/datepicker";
import { CarouselModule } from "ngx-bootstrap/carousel";
import { ModalModule } from "ngx-bootstrap/modal";
import { JwBootstrapSwitchNg2Module } from "jw-bootstrap-switch-ng2";
import { PopoverModule } from "ngx-bootstrap/popover";

import { IndexComponent } from "./index/index.component";
import { RegisterpageComponent } from "../registerpage/registerpage.component";
import { CountDownModule } from 'ng6-countdown';
import { CountdownTimerModule } from 'ngx-countdown-timer';
import { HomeForumComponent } from '../home-forum/home-forum.component';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { HomeAncienEditionComponent } from '../home-ancien-edition/home-ancien-edition.component';
import { HomeSponsorsComponent } from '../home-sponsors/home-sponsors.component';
import { CountdownComponent } from '../countdown/countdown.component';
import { NgxPageScrollModule } from 'ngx-page-scroll';
import { RegisterEmployeComponent } from '../register-employe/register-employe.component';
import { RegisterEntrepriseComponent } from '../register-entreprise/register-entreprise.component';
import { TemoignageComponent } from '../home-temoignage/temoignage.component';


@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule, CountDownModule, CountdownTimerModule.forRoot(),
    RouterModule, NgxPageScrollModule,
    BsDropdownModule.forRoot(),
    ProgressbarModule.forRoot(),
    TooltipModule.forRoot(),
    PopoverModule.forRoot(),
    CollapseModule.forRoot(),
    JwBootstrapSwitchNg2Module,
    TabsModule.forRoot(),
    PaginationModule.forRoot(),
    AlertModule.forRoot(),
    BsDatepickerModule.forRoot(),
    CarouselModule.forRoot(),
    ModalModule.forRoot()
  ],
  declarations: [
    IndexComponent, CountdownComponent, HeaderComponent,
    RegisterpageComponent, TemoignageComponent
    , HomeForumComponent,
    HomeSponsorsComponent,
    HomeAncienEditionComponent,
    RegisterEmployeComponent,
    RegisterEntrepriseComponent


  ],
  exports: [
    IndexComponent,
   
    RegisterpageComponent,
    TemoignageComponent
  ],
  providers: []
})
export class PagesModule { }
