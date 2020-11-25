import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Users } from '../Users';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  private SERVER_URL = environment.SERVER_URL;
  constructor(private http: HttpClient, private router:Router) { }

  ngOnInit(): void {
  }

  addnewUser(createBody){
    const httpHeaders = new HttpHeaders();
    httpHeaders.append('content-type', 'application/json');
    return this.http.post<Users[]>(this.SERVER_URL + '/register', createBody, {headers:httpHeaders});
  }

  submitRegistrationForm(form): void {

  const newFormData = {name:form.value.name,username:form.value.username, email:form.value.email, password:form.value.password};

  console.log(form.value.name);
   console.log(form.value.username);
   console.log(form.value.email);
   console.log(form.value.password);

   if(form.value.name == ""){
    alert("Please enter your full name");
 }

 if(form.value.name.length<=5){
  alert("Please enter a name greather than 5 characters.");
}

   if(form.value.password == ""){
    alert("Please enter a password");
 }

  else if(form.value.password.length<=6){
    alert("Please enter a password greater than 6 characters.")
 }

  if(form.value.username == "" || form.value.username.length==0 || form.value.username==null){
   alert("Please enter a username");
 }

 if(form.value.email == ""){
  alert("Please enter a email address");
}

   if ((/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(form.value.email)) && (form.value.password!="") && (form.value.password.length>6) && (form.value.username!="")){
  this.addnewUser(newFormData).subscribe(data=>console.log(data));
  this.router.navigate(['/login']);
   }

   form.reset();

  }

}
