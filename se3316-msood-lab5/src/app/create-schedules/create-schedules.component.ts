import { AuthService } from './../auth.service';
import { SchedulesService } from './../schedules.service';
import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormArray} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-create-schedules',
  templateUrl: './create-schedules.component.html',
  styleUrls: ['./create-schedules.component.css']
})
export class CreateSchedulesComponent implements OnInit {
  scheduleForm: FormGroup;
  scheduleCourses: any[] = [];
  currentUser:any; 
  name: string;
  username:string;
  constructor(private scheduleService: SchedulesService, private fb:FormBuilder, private route:ActivatedRoute, private authService:AuthService) { }

  ngOnInit(): void {
    this.scheduleForm = this.fb.group({
      visibility: [''],
      scheduleName: ['', Validators.required],
      scheduleDescription: [''],
      subject_schedule: this.fb.array([this.addCoursesFormGroup()])
    });
    this.getUserProfile();
  }

  addCoursesFormGroup(): FormGroup {
    return this.fb.group({
      subject: [''],
      courseCode: ['']
    });
  }

  addAnotherCourse(): void {
    (<FormArray>this.scheduleForm.get('subject_schedule')).push(this.addCoursesFormGroup())
    console.log(this.scheduleForm.value);
  }

  getUserProfile(){
    this.authService.getUserProfile().subscribe(data=>{
      console.log(data);
      this.currentUser=data;
      this.name = this.currentUser.user.name;
      this.username=this.currentUser.user.username;
    })
  }


  submitSchedule(): void {

    this.scheduleCourses = this.scheduleForm.value.subject_schedule.flatMap((item)=>Object.values(item));
    const newFormData = {visibility:this.scheduleForm.value.visibility, scheduleName:this.scheduleForm.value.scheduleName, scheduleDescription:this.scheduleForm.value.scheduleDescription, subject_schedule:this.scheduleCourses, createdBy:this.name};
    console.log(newFormData);

  if(this.scheduleForm.value.visibility == ""){
    alert("Please select the visibility of this schedule.");
   }

   if(this.scheduleForm.value.scheduleName == ""){
    alert("Please enter a schedule name");
 }

else if(this.scheduleForm.value.scheduleName.length>=10){
  alert("Please enter a shorter schedule name");
}

  if(this.scheduleForm.value.visibility != "" && this.scheduleForm.value.scheduleName != "" && this.scheduleForm.value.scheduleName.length<10 ){
    this.scheduleService.addNewSchedule(newFormData).subscribe(data=>console.log(data));
    this.scheduleForm.reset();
  }
  }

  removeCourseButtonClick(courseIndex:number): void{
    (<FormArray>this.scheduleForm.get('subject_schedule')).removeAt(courseIndex);
  }

}
