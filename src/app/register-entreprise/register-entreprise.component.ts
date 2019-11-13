import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Entreprise } from '../entity/entreprise';
import { ApiService } from '../services/api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-register-entreprise',
  templateUrl: './register-entreprise.component.html',
  styleUrls: ['./register-entreprise.component.scss']
})
export class RegisterEntrepriseComponent  implements OnInit, OnDestroy {
  isCollapsed = true;
  @Input() credentials : Entreprise ;
  @Input() langcd :any;
  errorMessage: any;
  response: any;
  successful: boolean=false;
  isInscription: boolean=false;
  constructor(private apiS : ApiService, private router : Router, private route: ActivatedRoute) { }

  ngOnInit() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.add("profile-page");
    this.credentials = new Entreprise();
    this.route.paramMap
    .pipe(map(() => { window.history.state; }));
    console.log(history.state.langcd);
    this.langcd=history.state.langcd;
  }
  ngOnDestroy() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.remove("profile-page");
  }

  onSubmit(){
    this.apiS.addEntreprise(this.credentials).subscribe(Response=>{
     
      this.response=Response.message;
      this.successful=true;
      this.isInscription = false;
      this.credentials.nom='';
      this.credentials.domaineActivites='';
      this.credentials.raisonSociale='';
      this.credentials.email='';
      this.credentials.tel='';

    },
    error => {
      console.log(error);
      this.errorMessage = error.error.message;
      this.isInscription = true;

    }
  );
}
  }



