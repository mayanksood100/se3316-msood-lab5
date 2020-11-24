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
  constructor(private authService: AuthService, private router:Router) { }
  
  ngOnInit(): void {
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
    this.authService.loginUser(newFormData).subscribe(data=>{
      this.token=data;
      console.log(this.token.token);
      this.authService.setToken(data['token']);
      console.log(this.authService);
      this.router.navigate(['/login']);
    });
  }

    form.reset();
  }

}
