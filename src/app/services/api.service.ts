import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseURI : String = "https://backend2forum.herokuapp.com/ForumEnsit";
  private header=new HttpHeaders().set('Content-Type','application/json');
  constructor(private http:HttpClient) { }


  
  addEntreprise(entreprise):any{
    return this.http.post(this.baseURI+'/entreprise',entreprise,{headers:this.header});
  }

  addEmploye(empl):any{
    return this.http.post(this.baseURI+'/employes',empl,{headers:this.header});
  }
  addEtudiant(etudiant):any{
    return this.http.post(this.baseURI+'/etudiant',etudiant,{headers:this.header});
  }
}
