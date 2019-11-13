import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule } from "@angular/router";

import { IndexComponent } from "./pages/index/index.component";
import { RegisterpageComponent } from "./registerpage/registerpage.component";
import { RegisterEmployeComponent } from './register-employe/register-employe.component';
import { RegisterEntrepriseComponent } from './register-entreprise/register-entreprise.component';
import { TemoignageComponent } from './home-temoignage/temoignage.component';

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: IndexComponent },
  { path: "registeretudiant", component: RegisterpageComponent },
  { path: "registeremploye", component: RegisterEmployeComponent },
  { path: "registerentreprise", component: RegisterEntrepriseComponent },

  { path: "landing", component: TemoignageComponent }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  exports: []
})
export class AppRoutingModule {}
