import { ReviewService } from './../review.service';
import { CoursesService } from './../courses.service';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-courses-review',
  templateUrl: './courses-review.component.html',
  styleUrls: ['./courses-review.component.css']
})
export class CoursesReviewComponent implements OnInit {
  courseIds:[];
  subjects:[];
  courseNumbers:[];
  matchSubject:Boolean;
  currentUser:any; 
  username:string;
  reviewForm: FormGroup;
  constructor(private fb:FormBuilder, private route:ActivatedRoute, private authService:AuthService, private reviewService:ReviewService, private courseService:CoursesService, private router:Router) { }

  ngOnInit(): void {
    this.reviewForm = this.fb.group({
      title: ['', Validators.required],
      courseId: ['', Validators.required],
      rating:['', Validators.required],
      comment:['', Validators.required]
    });
    this.getCourseIds();
    this.getUserProfile();
  }


  getCourseIds(){
    this.courseService.getCourseIds().subscribe(data=>{
      this.courseIds=data;
      console.log(this.courseIds);
    })
  }

  checkCourseIds(){
    console.log(this.courseIds.length);
    for(let i=0; i<this.courseIds.length; i++){
      if(this.courseIds[i] == this.reviewForm.value.courseId){
       return true;
    }
  }
    return false;
  }

  getUserProfile(){
    this.authService.getUserProfile().subscribe(data=>{
      console.log(data);
      this.currentUser=data;
      this.username=this.currentUser.user.username;
    })
  }


  submitReview(){
    this.checkCourseIds();
   
   const reviewFormData = {title:this.reviewForm.value.title, courseId:this.reviewForm.value.courseId,rating:this.reviewForm.value.rating, comment:this.reviewForm.value.comment, createdBy:this.username}

   if(this.reviewForm.value.title==null||this.reviewForm.value.title==""){
     alert("Please enter a title for the course Review");
   }

   else if(this.reviewForm.value.courseId==null||this.reviewForm.value.courseId==""){
    alert("Please enter the subject and course number for the course you want to review");
   }

  else if(this.checkCourseIds()==false){
    alert("Invalid Course. This course is not offered at Western University.");
  }

  else if(this.reviewForm.value.rating==null||this.reviewForm.value.rating==""){
    alert("Please enter a rating for the course.");
  }

  else if(this.reviewForm.value.comment==null||this.reviewForm.value.comment==""){
    alert("Please enter some comments for the course.");
  }

else{
   this.reviewService.addNewReview(reviewFormData).subscribe(data=>console.log(data));
   this.reviewForm.reset();
   alert(`Your review was successfully submitted.`);
   this.router.navigate(['/courses']);
   
}
  }

}
