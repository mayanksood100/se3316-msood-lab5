import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DmcaService {
  private SERVER_URL = environment.SERVER_URL;
  noAuthHeader = { headers: new HttpHeaders({ 'NoAuth': 'True' }) };
  constructor(private http: HttpClient, private router:Router) { }

  getDmca(){
    return this.http.get(this.SERVER_URL + '/DMCA');
  }

  postDmca(data){
    return this.http.post(this.SERVER_URL + '/DMCA',data);
  }

  updatePolicy(id, data){
    return this.http.put(this.SERVER_URL+'/DMCA/'+id, data)
  }


}
