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
  reviewForm: FormGroup;
  constructor(private fb:FormBuilder, private route:ActivatedRoute, private authService:AuthService, private reviewService:ReviewService) { }

  ngOnInit(): void {
    this.reviewForm = this.fb.group({
      title: ['', Validators.required],
      subject: ['', Validators.required],
      courseNumber: ['', Validators.required],
      rating:['', Validators.required],
      comment:['', Validators.required]
    });
  }

  submitReview(){

   const reviewFormData = {title:this.reviewForm.value.title, subject:this.reviewForm.value.subject, courseNumber:this.reviewForm.value.courseNumber,rating:this.reviewForm.value.rating, comment:this.reviewForm.value.comment}

   this.reviewService.addNewReview(reviewFormData).subscribe(data=>console.log(data));
   this.reviewForm.reset();

  }

}
