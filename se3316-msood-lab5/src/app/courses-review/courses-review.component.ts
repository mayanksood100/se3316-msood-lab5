import { ReviewService } from './../review.service';
import { CoursesService } from './../courses.service';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

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
  constructor(private fb:FormBuilder, private route:ActivatedRoute, private authService:AuthService, private reviewService:ReviewService, private courseService:CoursesService) { }

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
   
   const reviewFormData = {title:this.reviewForm.value.title, courseId:this.reviewForm.value.courseId, subject:this.reviewForm.value.subject, courseNumber:this.reviewForm.value.courseNumber,rating:this.reviewForm.value.rating, comment:this.reviewForm.value.comment, createdBy:this.username}

   if(this.reviewForm.value.title==null||this.reviewForm.value.title==""){
     alert("Please enter a title for the course Review");
   }

   if(this.reviewForm.value.courseId==null||this.reviewForm.value.courseId==""){
    alert("Please enter the subject and course number for the course you want to review");
   }

  if(this.checkCourseIds()==false){
    alert("Invalid Course. This course is not offered at Western University.");
  }

  if(this.reviewForm.value.rating==null||this.reviewForm.value.rating==""){
    alert("Please enter a rating for the course.");
  }

  if(this.reviewForm.value.rating<1 ||this.reviewForm.value.rating>5){
    alert("Please enter a rating only between 1 and 5.");
  }

  if(this.reviewForm.value.comment==null||this.reviewForm.value.comment==""){
    alert("Please enter some comments for the course.");
  }

  if(this.reviewForm.value.title!="" && this.reviewForm.value.courseId!="" && this.reviewForm.value.rating!="" && (this.reviewForm.value.rating>=1 || this.reviewForm.value.rating<=5) && this.reviewForm.value.comment!="" && this.checkCourseIds()==true ){
   this.reviewService.addNewReview(reviewFormData).subscribe(data=>console.log(data));
   this.reviewForm.reset();
   alert(`Your review was successfully submitted.`);
  }
  }

}
