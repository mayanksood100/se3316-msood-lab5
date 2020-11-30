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

  constructor(private fb:FormBuilder, private route:ActivatedRoute, private reviewService:ReviewService) { }
  reviewForm:FormGroup
  existingReview:any;

  ngOnInit(): void {
    this.reviewForm = this.fb.group({
      hidden: ['', Validators.required]
    })

    this.route.paramMap.subscribe(params=>{
      const title = params.get('title');
      if(title){
        this.getReview(title)
      }
    });
  }

  getReview(title:string){
    this.reviewService.getReview(title).subscribe(review=>{
      this.existingReview=review;
    })
  }

  submitEditedReviewVisibility(){
    const editReviewData={hidden:this.reviewForm.value.hidden};
    this.reviewService.editReview(this.existingReview.title,editReviewData).subscribe(data=>{
      console.log(data);
      this.reviewForm.reset();
    })
  }

}
