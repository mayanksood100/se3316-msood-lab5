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
  reviewForm: FormGroup;
  constructor(private fb:FormBuilder, private route:ActivatedRoute, private authService:AuthService, private reviewService:ReviewService, private courseService:CoursesService) { }

  ngOnInit(): void {
    this.reviewForm = this.fb.group({
      title: ['', Validators.required],
      subject: ['', Validators.required],
      courseNumber: ['', Validators.required],
      rating:['', Validators.required],
      comment:['', Validators.required]
    });
    this.getSubjects();
    this.getCourseNumbers();
    this.getCourseIds();
  }

  getSubjects(){
    this.courseService.getAllSubjects().subscribe(subjects=>{
      this.subjects=subjects;
    })
  };

  getCourseNumbers(){
    this.courseService.getAllCourseNumbers().subscribe(courseNumbers=>{
      this.courseNumbers=courseNumbers;
      console.log(this.courseNumbers);
    })
  };

  getCourseIds(){
    this.courseService.getCourseIds().subscribe(data=>{
      this.courseIds=data;
    })
  }

  checkSubject(){
    console.log(this.subjects.length);
    for(let i=0; i<this.subjects.length; i++){
      if(this.subjects[i] == this.reviewForm.value.subject.toUpperCase()){
       return true;
    }
  }
    return false;
  }

  checkCourseNumbers(){
    for(let i=0; i<this.courseNumbers.length; i++){
      if(this.courseNumbers[i] == this.reviewForm.value.courseNumber){
       return true;
    }
  }
    return false;
  }

  submitReview(){

    this.checkSubject();
    this.checkCourseNumbers();
   
   const reviewFormData = {title:this.reviewForm.value.title, subject:this.reviewForm.value.subject, courseNumber:this.reviewForm.value.courseNumber,rating:this.reviewForm.value.rating, comment:this.reviewForm.value.comment}

   if(this.reviewForm.value.title==null||this.reviewForm.value.title==""){
     alert("Please enter a title for the course Review");
   }

   if(this.reviewForm.value.subject==null||this.reviewForm.value.subject==""){
    alert("Please enter the subject of the course you want to review");
  }

  if(this.checkSubject()==false){
    alert("Invalid Subject. This subject is not offered at Western University.");
  }

  if(this.reviewForm.value.courseNumber==null||this.reviewForm.value.courseNumber==""){
    alert("Please enter the courseNumber of the course you want to review");
  }

  if(this.checkCourseNumbers()==false){
    alert("Invalid CourseNumber");
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

  if(this.reviewForm.value.title!="" && this.reviewForm.value.subject!="" && this.reviewForm.value.courseNumber!="" && this.reviewForm.value.rating!="" && (this.reviewForm.value.rating>=1 || this.reviewForm.value.rating<=5) && this.reviewForm.value.comment!="" && this.checkSubject()==true && this.checkCourseNumbers()==true ){
   this.reviewService.addNewReview(reviewFormData).subscribe(data=>console.log(data));
   this.reviewForm.reset();
   alert(`Your review was successfully submitted.`);
  }
  }

}
