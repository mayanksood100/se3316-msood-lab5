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

    const newFormData = {email:form.value.email, password:form.value.password};
    console.log(form.value.email);
    console.log(form.value.password);

    if(form.value.password == ""){
      alert("Please enter a password");
   }
  
    else if(form.value.password.length<=6){
      alert("Please enter a password greater than 6 characters.")
   }
  
   if(form.value.email == ""){
    alert("Please enter a email address");
  }

  if(!(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(form.value.email))){
    alert("Invalid Email Address");
  }

  else{
    this.loginUser(newFormData).subscribe(data=>console.log(data));
  }

    form.reset();
  }

}
