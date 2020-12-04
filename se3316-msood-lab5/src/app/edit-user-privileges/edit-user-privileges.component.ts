import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormArray} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-edit-user-privileges',
  templateUrl: './edit-user-privileges.component.html',
  styleUrls: ['./edit-user-privileges.component.css']
})
export class EditUserPrivilegesComponent implements OnInit {
  userForm: FormGroup;
  existingUser:any;
  admin: boolean;
  constructor( private fb:FormBuilder, private route:ActivatedRoute, private authService:AuthService) { }

  ngOnInit(): void {
    this.userForm = this.fb.group({
      admin: ['', Validators.required],
      deactive:['', Validators.required]
    })

    this.route.paramMap.subscribe(params=>{
      const username = params.get('username');
      if(username){
        this.getUser(username)
      }
    });

    this.checkAdmin();

  }

  checkAdmin(){
    this.admin = this.authService.checkAdmin();
  }


  getUser(username:string){
    this.authService.getUser(username).subscribe(user=>{
      this.editUser(user)
      this.existingUser=user;
    })
  }

  editUser(user){
    console.log(user);
  }

  submitEditedUser(){
    const editUserData = {admin:this.userForm.value.admin, deactive:this.userForm.value.deactive};
    this.authService.editUser(this.existingUser.username,editUserData).subscribe(data=>{
      console.log(data);
      this.userForm.reset();
    })
  }

}
