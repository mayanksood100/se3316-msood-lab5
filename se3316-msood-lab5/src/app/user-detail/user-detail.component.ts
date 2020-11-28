import { AuthService } from './../auth.service';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserProfileComponent implements OnInit { 
  currentUser:any; 
  name: string;
  username:string;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    if(this.authService.isLoggedIn() == false){
      this.router.navigateByUrl('/login');
    }
    this.getUserProfile();
  }
  
  onLogout(){
    this.authService.deleteToken();
    this.router.navigate(['/login']);
  }

  viewPublicSchedules(){
    this.router.navigate(['publicSchedules']);
  }

  getUserProfile(){
    this.authService.getUserProfile().subscribe(data=>{
      console.log(data);
      this.currentUser=data;
      this.name = this.currentUser.user.name;
      this.username=this.currentUser.user.username;
    })
  }

 

 

}