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
  response:any;
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

   if(form.value.name == ""){
    alert("Please enter your full name");
 }

 else if(form.value.name.length<=5){
  alert("Please enter a name greather than 5 characters.");
}

   else if(form.value.password == ""){
    alert("Please enter a password");
 }

  else if(form.value.password.length<=6){
    alert("Please enter a password greater than 6 characters.")
 }

 else if(form.value.username == "" || form.value.username.length==0 || form.value.username==null){
   alert("Please enter a username");
 }

 else if(form.value.email == ""){
  alert("Please enter a email address");
}

else if(!(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(form.value.email))){
  alert("Invalid Email Address");
}
  else {
  this.addnewUser(newFormData).subscribe(data=>{
    this.response=data;
    if(this.response.message=="An account with this email already exists!"){
      alert(this.response.message);
    }
    
    else{
    alert("Your account was successfuly created.");
    this.router.navigate(['/login']);
    }
   })

    form.reset();

  }
  }
}
