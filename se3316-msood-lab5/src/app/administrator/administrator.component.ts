import { ReviewService } from './../review.service';
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
  reviews:[];
  message:any;
  admin:boolean;
  constructor(private authService:AuthService, private router:Router, private reviewService:ReviewService) { }

  ngOnInit(): void {
    this.checkAdmin();
    this.getAllUsers();
    this.getAllReviews();
  }

  checkAdmin(){
    this.admin = this.authService.checkAdmin();
  }

  getAllUsers(){
    this.authService.getAllUsers().subscribe(data=>{

      this.message=data;
      if(this.message.message=="You are not an administrator!"){
        alert("You are not an admin!");
        this.router.navigate[('/login')];
      }
      else{
        console.log(data);
      this.users=data;
      }
      
    })
  }

  editButtonClick(username:string){
    
    this.router.navigate(['/editUserPrivilege', username, ])
  }

  getAllReviews(){
    this.reviewService.getAllReviews().subscribe(data=>{

      if(this.message.message=="You are not an administrator!"){
        this.router.navigate[('/login')];
      }

      else{
        console.log(data);
        this.reviews=data;
      }
     
    })
  }

  editReviewVisibility(title:string){
    this.router.navigate(['/editReviewVisibility', title, ])
  }

  createPolicy(){
    this.router.navigate(['/createPolicy']);
  }

  logRequests(){
    this.router.navigate(['/logRequests']);
  }



}
