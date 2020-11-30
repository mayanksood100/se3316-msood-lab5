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
  constructor(private authService:AuthService, private router:Router, private reviewService:ReviewService) { }

  ngOnInit(): void {
    this.getAllUsers();
    this.getAllReviews();
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

  getAllReviews(){
    this.reviewService.getAllReviews().subscribe(data=>{
      console.log(data);
      this.reviews=data;
    })
  }

  editReviewVisibility(title:string){
    this.router.navigate(['/editReviewVisibility', title, ])
  }



}
