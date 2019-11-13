import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Employe } from '../entity/employe';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-register-employe',
  templateUrl: './register-employe.component.html',
  styleUrls: ['./register-employe.component.scss']
})
export class RegisterEmployeComponent implements OnInit, OnDestroy {

  isCollapsed = true;
  @Input() credentials: Employe;
  @Input() langcd :any;
  errorMessage: any;
  isInscription: boolean = false;
  constructor(private apiS: ApiService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.add("profile-page");
    this.credentials = new Employe();
    this.route.paramMap
    .pipe(map(() => { window.history.state; }));
    console.log(history.state.langcd);
    this.langcd=history.state.langcd;
  }
  ngOnDestroy() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.remove("profile-page");
  }

  onSubmit() {
    this.apiS.addEmploye(this.credentials).subscribe(resp => { console.log(resp); this.router.navigateByUrl('/home'); },
      error => {
        console.log(error);
        this.errorMessage = error.error.message;
        this.isInscription = true;

      }
    );
  }
}

