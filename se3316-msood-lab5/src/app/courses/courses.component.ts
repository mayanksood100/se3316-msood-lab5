import { AuthService } from './../auth.service';
import { Router } from '@angular/router';
import { CoursesService } from './../courses.service';
import { Courses } from './../Courses';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  courses: Courses[];
  courseIds:[];
  allReviews:[];
  selectedCourse: Courses;
  myConcatenation: String;
  currentUser:any; 
  username:string;
  subject: string;
  courseNumber:string;
  courseComponent: string;
  keyword:string;
  loginCheck:boolean;
  keywords:[];
  keyword2:string;
  key:boolean=false;

  constructor(private courseService: CoursesService, private router: Router, private authService:AuthService) { }

  ngOnInit(): void {
    this.getAllCourses();
    this.isLoggedIn();
    this.getAllReviews();
    this.getUserProfile();
  }

  getAllCourses(){
    this.courseService.getAllCourses().subscribe(courses => {
      this.courses = courses;
    });
  }

  getCourseIds(){
    this.courseService.getCourseIds().subscribe(ids => {
      this.courseIds = ids;
    });
  }

  getAllReviews(){
    this.courseService.getAllReviews().subscribe(reviews=>{
      this.allReviews=reviews;
      console.log(reviews);
      console.log(this.allReviews);
    })
  }

  getKeywords(){
    this.courseService.getKeywords(this.keyword2).subscribe(keywords=>{
      this.keywords = keywords;
      console.log(this.keywords)
     
      this.key=true;
      this.courses=[];
    })
  }

  getUserProfile(){
    this.authService.getUserProfile().subscribe(data=>{
      console.log(data);
      this.currentUser=data;
      this.username=this.currentUser.user.username;
    })
  }

  isLoggedIn(){
    this.loginCheck = this.authService.isLoggedIn();
  }

  onSelect(course:Courses){
    this.selectedCourse=course;
    this.myConcatenation=`${this.selectedCourse.subject} ${this.selectedCourse.catalog_nbr}`
    console.log(this.selectedCourse);
  }

  colorComponent(ssrComponent){
    switch (ssrComponent) {
      case 'TUT':
        return 'red';
      case 'LAB':
        return 'blue';
    }
  }

  btnClick(){
  this.router.navigate(['/register']);
}
  btnClick2(){
  this.router.navigate(['/login']);
}

viewPublicSchedules(){
 this.router.navigate(['publicSchedules']);
}

logoutUser(){
  this.authService.deleteToken();
  this.router.navigate(['/login']);
}

changePassword(){
  this.router.navigate([`/changePassword/${this.username}`]);
}

  

}
