import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loginCheck:boolean;
  adminCheck:boolean;
  title = 'SE 3316 Lab 5';
  currentUser:any;
  username:string;
  constructor(private authService:AuthService){}

  ngOnInit(): void {
    this.isLoggedIn();
    this.isAdmin();
  }
  
  isLoggedIn(){
    this.loginCheck = this.authService.isLoggedIn();
  }

  isAdmin(){
    this.adminCheck = this.authService.checkAdmin();
    console.log(this.adminCheck);

  }
  
}

