import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserProfileComponent implements OnInit {  
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    if(this.authService.isLoggedIn() == false){
      this.router.navigateByUrl('/login');
    }
  }

  

  onLogout(){
    this.authService.deleteToken();
    this.router.navigate(['/login']);
  }

}