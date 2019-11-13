import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseURI : String = "https://forumensitbackend.herokuapp.com/ForumEnsit";
  private header=new HttpHeaders().set('Content-Type','application/json');
  constructor(private http:HttpClient) { }

  readAllEntreprise():Observable<any>{
    return this.http.get(this.baseURI+'/entreprise');
  }
  
  readAllEmploye():Observable<any>{
    return this.http.get(this.baseURI+'/employes');
  }

  readAllEtudiant():Observable<any>{
    return this.http.get(this.baseURI+'/etudiant');
  }
  
  addEntreprise(entreprise){
    return this.http.post(this.baseURI+'/entreprise',entreprise,{headers:this.header});
  }

  addEmploye(empl){
    return this.http.post(this.baseURI+'/employes',empl,{headers:this.header});
  }
  addEtudiant(etudiant){
    return this.http.post(this.baseURI+'/etudiant',etudiant,{headers:this.header});
  }
}
