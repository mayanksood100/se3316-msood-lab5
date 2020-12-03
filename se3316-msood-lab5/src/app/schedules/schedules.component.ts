import { SchedulesService } from './../schedules.service';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { CoursesService } from '../courses.service';
import { Schedule } from '../schedule';
import { Courses } from '../Courses';

@Component({
  selector: 'app-schedules',
  templateUrl: './schedules.component.html',
  styleUrls: ['./schedules.component.css']
})
export class SchedulesComponent implements OnInit {
  courses: Courses[];
  matchArray:any[]=[];
  matchIndex:any;
  schedules:any[] = [];
  schedules_fixed:any[] = [];
  confirmDelete = false;
  selectedSchedule:any;
  myConcatenation: String;
  indexArray:any[]=[];
  constructor(private scheduleService: SchedulesService, private router:Router, private courseService:CoursesService) { }

  ngOnInit(): void {
    this.getAllCourses();
    this.getAllSchedules();
  }

  getAllSchedules(){
    this.scheduleService.getAllSchedules().subscribe(scheds => {
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
        console.log(this.schedules);
        console.log(this.schedules_fixed);
    });
  }

  editButtonClick(scheduleName:string){
    this.router.navigate(['/editSchedule', scheduleName, ])
  }

  deleteSchedule(name:string): void {
    console.log(name);
    this.scheduleService.deleteSchedule(name).subscribe(data => {
    this.getAllSchedules();
    });

  }

  deleteAll(): void {
   this.scheduleService.deleteAllSchedules().subscribe(data=>this.getAllSchedules());
  }

  getAllCourses(){
    this.courseService.getAllCourses().subscribe(courses => {
      this.courses = courses;
      for(let i=0; i<this.courses.length; i++){
        this.matchArray.push(this.courses[i].subject + " " + this.courses[i].catalog_nbr);
      }
      console.log(this.matchArray);
    });
  }

  onSelect(schedule:Schedule[]){
    this.selectedSchedule=(schedule);
    console.log(this.selectedSchedule['subject_schedule']);
    this.myConcatenation=this.selectedSchedule['subject_schedule'][0];
    console.log(this.myConcatenation);
   this.matchIndex = (this.matchArray.indexOf(this.myConcatenation)); 
   this.indexArray=(this.selectedSchedule['subject_schedule']).map(v=>this.matchArray.indexOf(v));
   console.log(this.indexArray); 
  }


}
