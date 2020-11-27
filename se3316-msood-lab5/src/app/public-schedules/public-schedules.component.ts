import { SchedulesService } from './../schedules.service';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-public-schedules',
  templateUrl: './public-schedules.component.html',
  styleUrls: ['./public-schedules.component.css']
})
export class PublicSchedulesComponent implements OnInit {
  schedules:any[] = [];
  schedules_fixed:any[] = [];

  constructor(private scheduleService: SchedulesService, private router:Router) { }

  ngOnInit(): void {
  this.getPublicSchedules();
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


}
