import { AuthService } from './../auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService:AuthService, private router:Router) {}

  ngOnInit(): void {
    this.canActivate();
  
  }
  
  canActivate(): boolean {
      if(!this.authService.isLoggedIn()){
        alert("You are not logged in! Please log in to access this feature.")
        this.router.navigate['/login'];
        this.authService.deleteToken();
        return false;
      }
    return true;
  }

  
}
