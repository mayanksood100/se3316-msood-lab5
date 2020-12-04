import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-log',
  templateUrl: './admin-log.component.html',
  styleUrls: ['./admin-log.component.css']
})
export class AdminLogComponent implements OnInit {
  admin:boolean;
  constructor(private authService:AuthService) { }

  ngOnInit(): void {
    this.checkAdmin();
  }

  checkAdmin(){
    this.admin = this.authService.checkAdmin();
  }

  


}
