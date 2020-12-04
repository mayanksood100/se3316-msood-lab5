import { AuthService } from './../auth.service';
import { ReviewService } from './../review.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-review-visibility',
  templateUrl: './edit-review-visibility.component.html',
  styleUrls: ['./edit-review-visibility.component.css']
})
export class EditReviewVisibilityComponent implements OnInit {

  constructor(private fb:FormBuilder, private route:ActivatedRoute, private reviewService:ReviewService, private authService:AuthService) { }
  reviewForm:FormGroup
  existingReview:any;
  admin: boolean;

  ngOnInit(): void {
    this.reviewForm = this.fb.group({
      hidden: ['', Validators.required],
      infringing:['', Validators.required]
    })

    this.route.paramMap.subscribe(params=>{
      const title = params.get('title');
      if(title){
        this.getReview(title)
      }
    });

    this.checkAdmin();

  }

  checkAdmin(){
    this.admin = this.authService.checkAdmin();
  }

  getReview(title:string){
    this.reviewService.getReview(title).subscribe(review=>{
      this.existingReview=review;
    })
  }

  submitEditedReviewVisibility(){
    const editReviewData={hidden:this.reviewForm.value.hidden, infringing:this.reviewForm.value.infringing};
    this.reviewService.editReview(this.existingReview.title,editReviewData).subscribe(data=>{
      console.log(data);
      this.reviewForm.reset();
    })
  }

}
