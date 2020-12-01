import { CoursesService } from './../courses.service';
import { SchedulesService } from './../schedules.service';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Schedule } from '../schedule';
import { Courses } from '../Courses';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-public-schedules',
  templateUrl: './public-schedules.component.html',
  styleUrls: ['./public-schedules.component.css']
})
export class PublicSchedulesComponent implements OnInit {
  courses: Courses[];
  schedules:any[] = [];
  schedules_fixed:any[] = [];
  selectedPublicSchedule: Array<any>;
  courseIds:[];
  myConcatenation: String;

  constructor(private scheduleService: SchedulesService, private router:Router, private courseService:CoursesService) { }

  ngOnInit(): void {
    this.getAllCourses();
    this.getPublicSchedules();
    this.getCourseIds();
  }

  getPublicSchedules(){
    this.scheduleService.getPublicSchedules().subscribe(scheds => {
      this.schedules = scheds;
      
      const combineItem = (arr, result = []) => {
        if(arr.length===0) {return result}
        result.push(arr.slice(0, 2).join(' '));
        return combineItem(arr.slice(2), result);
        }
        this.schedules_fixed = this.schedules.map((x) => ({
          ...x,
          subject_schedule: combineItem(x.subject_schedule),
        }));
    });
  }

  onSelect(publicSchedule:Schedule[]){
    this.selectedPublicSchedule=(publicSchedule);
    console.log(this.selectedPublicSchedule);
  }

  getAllCourses(){
    this.courseService.getAllCourses().subscribe(courses => {
      this.courses = courses;
      //console.log(this.courses);
    });
  }

  getCourseIds(){
    this.courseService.getCourseIds().subscribe(data=>{
      this.courseIds=data;
      //console.log(data);
    })
  }


}
