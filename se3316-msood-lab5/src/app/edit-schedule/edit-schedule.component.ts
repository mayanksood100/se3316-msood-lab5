import { SchedulesService } from './../schedules.service';
import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormArray} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-schedule',
  templateUrl: './edit-schedule.component.html',
  styleUrls: ['./edit-schedule.component.css']
})
export class EditScheduleComponent implements OnInit {
  scheduleForm: FormGroup;
  scheduleCourses: any[] = [];

  constructor(private scheduleService: SchedulesService, private fb:FormBuilder, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.scheduleForm = this.fb.group({
      visibility: [''],
      scheduleName: ['', Validators.required],
      scheduleDescription: [''],
      subject_schedule: this.fb.array([this.addCoursesFormGroup()])
    })

    this.route.paramMap.subscribe(params=>{
      const scheduleName = params.get('name');
      if(scheduleName){
        this.getSchedule(scheduleName)
      }
    });

  }

  getSchedule(schedName:string){
    this.scheduleService.getSchedule(schedName).subscribe(schedule=>{
      this.editSchedule(schedule);
    });
  }

  editSchedule(schedule){
    console.log(schedule);
    this.scheduleForm.patchValue({
      scheduleName:schedule.scheduleName,
      scheduleDescription:schedule.scheduleDescription
    });
   
    this.scheduleForm.setControl('subject_schedule', this.setExistingCourses(schedule.subject_schedule));
  }

  setExistingCourses(courseSets): FormArray{
    const formArray = new FormArray([]);
    console.log(courseSets);
    for(let i=0; i<courseSets.length;i++){
        formArray.push(this.fb.group({
        subject: courseSets[i],
        courseCode: courseSets[i+1]
      }))
      i++;
    }
    console.log(formArray.value);
    return formArray;
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

  submitEditedSchedule(): void {
    this.scheduleCourses = this.scheduleForm.value.subject_schedule.flatMap((item)=>Object.values(item));
    console.log(this.scheduleCourses);

    const editFormData = {visibility:this.scheduleForm.value.visibility, scheduleName:this.scheduleForm.value.scheduleName, scheduleDescription:this.scheduleForm.value.scheduleDescription, subject_schedule:this.scheduleCourses};

    
  if(this.scheduleForm.value.visibility == ""){
    alert("Please select the visibility of this schedule.");
   }

  else if(this.scheduleForm.value.scheduleName == ""){
    alert("Please enter a schedule name");
 }

else if(this.scheduleForm.value.scheduleName.length>=20){
  alert("Please enter a shorter schedule name");
}

else{
    this.scheduleService.editSchedule(this.scheduleForm.value.scheduleName,editFormData).subscribe(data=>console.log(data));
    this.scheduleForm.reset();
  }
}

  removeCourseButtonClick(courseIndex:number): void{
    (<FormArray>this.scheduleForm.get('subject_schedule')).removeAt(courseIndex);
  }

}
