import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  currentUser:any;
  username:string;
  constructor(private authService: AuthService, private router:Router) { }

  ngOnInit(): void {
    this.getUserProfile();
  }

  getUserProfile(){
    this.authService.getUserProfile().subscribe(data=>{
      console.log(data);
      this.currentUser=data;
      this.username=this.currentUser.user.username;
    })
  }

  submitPasswordForm(form): void{
    const newPasswordData = {password:form.value.password}

    console.log(form.value.password);
    console.log(form.value.password2);

    if(form.value.password == ""){
      alert("Please enter your email address");
    }
  
   else if(form.value.password2 == ""){
    alert("Please confirm your new password.");
  }
  else if(form.value.password!==form.value.password2){
    alert("Your passwords do not match!");
  }
  else{
    console.log("Hello, from the else block");
    this.authService.changePassword(this.username, newPasswordData).subscribe(data=>{
      console.log(data);
      alert("Your password was successfully changed!");
    })
  }
  form.reset();

  }

}
