import { LogServicesService } from './../log-services.service';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormArray} from '@angular/forms';

@Component({
  selector: 'app-admin-log',
  templateUrl: './admin-log.component.html',
  styleUrls: ['./admin-log.component.css']
})
export class AdminLogComponent implements OnInit {
  admin:boolean;
  title:string;
  name:string;
  address:string;
  phoneNumber:string;
  createdAt:string;
  logForm: FormGroup;
  message:any;

  constructor(private authService:AuthService, private fb:FormBuilder, private logService:LogServicesService) { }

  ngOnInit(): void {
    this.checkAdmin();
    this.title="My First Review";
    this.name="Administrator Admin";
    this.address="100 Web Application Street, London ON";
    this.phoneNumber="519-555-5421";
    this.createdAt='2020-12-02';
    this.logForm = this.fb.group({
      title: ['', Validators.required],
      type:['', Validators.required]

    })
  }

  checkAdmin(){
    this.admin = this.authService.checkAdmin();
  }

  logRequests(){
    const logData = {title:this.logForm.value.title, type:this.logForm.value.type};
    console.log(logData);
    console.log(this.logForm.value.title);
    console.log(this.logForm.value.type);
    
    this.logService.logRequests(logData).subscribe(data=>{
      console.log(data);
      this.message=data;

      if(this.message.message="Your from was successfully logged."){
        alert(this.message.message);
      }

      this.logForm.reset();
    })
  }

  

  


}
