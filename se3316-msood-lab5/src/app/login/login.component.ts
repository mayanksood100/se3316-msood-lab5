import { Router } from '@angular/router';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  token: any;
  username:string;
  admin:boolean;
  response:any;
  constructor(private authService: AuthService, private router:Router) { }
  
  ngOnInit(): void {
  }

  submitLoginForm(form):void{

    const newFormData = {email:form.value.email, password:form.value.password};
    console.log(form.value.email);
    console.log(form.value.password);

      
   if(form.value.email == ""){
    alert("Please enter a email address");
  }

  else if(!(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(form.value.email))){
    alert("Invalid Email Address.");
  }

   else if(form.value.password == ""){
      alert("Please enter a password");
   }

   else if(form.value.password == "" && form.value.email == ""){
    alert("Please fill out your email address and password to login.");
 }

  else{
    this.authService.loginUser(newFormData).subscribe(data=>{
     this.response=data;
      if(this.response.message=="User disabled"){
        alert("Your account has been disabled by an admin. Please contact msood@uwo.ca to gain access!");
      }

      else if(this.response.message=="Email does not exist!"){
        alert("Email does not exist! Please register an account before logging in");
      }

      else if(this.response.message=="Incorrect password. Please try again!"){
        alert("Incorrect Password! Please try again.");
      }

      else if(this.response.message=="The account is not yet verified!"){
        alert(this.response.message);
      }

      else{
        console.log(data);
        this.token=data;
        console.log(this.token.token);
        this.username=this.token.username;
        console.log(this.username);
        this.authService.setToken(data['token']);
        console.log(this.authService);
        this.admin=this.token.admin;
        if(this.admin==true){
          this.router.navigate(['/admin']);
        }
        else{
          this.router.navigate(['/user-detail']);
        }
      }
      
    });
  }

    form.reset();
  }

  getUsername() {
    return this.username;
  }

}
