import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-administrator',
  templateUrl: './administrator.component.html',
  styleUrls: ['./administrator.component.css']
})
export class AdministratorComponent implements OnInit {
  users:[];
  constructor(private authService:AuthService, private router:Router) { }

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers(){
    this.authService.getAllUsers().subscribe(data=>{
      console.log(data);
      this.users=data;
    })
  }

  editButtonClick(username:string){
    this.router.navigate(['/editUserPrivilege', username, ])
  }

}
