import { Component, OnInit, OnDestroy, HostListener, Input } from "@angular/core";
import { Etudiant } from 'src/app/entity/etudiant';
import { ApiService } from 'src/app/services/api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: "app-registerpage",
  templateUrl: "registerpage.component.html"
})
export class RegisterpageComponent implements OnInit, OnDestroy {
  isCollapsed = true;
  @Input() credentials : Etudiant ;
  @Input() langcd :any;
  errorMessage: any;
  isInscription: boolean=false;
  response: any;
  successful: boolean=false;
  constructor(private apiS : ApiService, private router : Router, private route: ActivatedRoute) { }

  ngOnInit() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.add("profile-page");
    this.credentials = new Etudiant();
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
    this.apiS.addEtudiant(this.credentials).subscribe(Response=>{

      this.response=Response.message;
      this.successful=true;
      this.isInscription = false;
      this.credentials.nom='';
      this.credentials.classe=null;
      this.credentials.ecole='';
      this.credentials.email='';
      this.credentials.prenom='';
      this.credentials.specialite='';
      this.credentials.tel='';


     // this.router.navigateByUrl('/home');
    },
    error => {
      console.log(error);

      this.errorMessage = error.error.message;
      this.isInscription = true;
      this.successful=false;



    }
  );
}
  }

