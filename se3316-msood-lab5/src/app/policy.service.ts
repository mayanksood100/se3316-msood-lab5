import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PolicyService {
  private SERVER_URL = environment.SERVER_URL;
  noAuthHeader = { headers: new HttpHeaders({ 'NoAuth': 'True' }) };
  constructor(private http: HttpClient, private router:Router) { }

  getPolicies(){
    return this.http.get(this.SERVER_URL + '/policy');
  }

  addPolicies(data){
    return this.http.post(this.SERVER_URL + '/policy',data);
  }

  updatePolicy(id, data){
    return this.http.put(this.SERVER_URL+'/policy/'+id, data)
  }


}
