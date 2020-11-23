import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Users } from '../Users';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private SERVER_URL = environment.SERVER_URL;
  constructor(private http: HttpClient, private router:Router) { }
  
  ngOnInit(): void {
  }

  loginUser(createBody){
    const httpHeaders = new HttpHeaders();
    httpHeaders.append('content-type', 'application/json');
    return this.http.post<Users[]>(this.SERVER_URL + '/login', createBody, {headers:httpHeaders});
  }

  submitLoginForm(form):void{

    const newFormData = {username:form.value.username, password:form.value.password};
    console.log(form.value.username);
    console.log(form.value.password);

    this.loginUser(newFormData).subscribe(data=>console.log(data));
    form.reset();
  }

}
