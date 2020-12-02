import { PolicyService } from '../policy.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-policies',
  templateUrl: './manage-policies.component.html',
  styleUrls: ['./manage-policies.component.css']
})
export class ManagePoliciesComponent implements OnInit {
  dmca: Object;
  id: String;
  polOne: String = "";
  polTwo: string = "";
  polThree: string = "";
  display: Boolean = false;
  obs: Boolean = false;

  constructor(private route: Router, private policyService:PolicyService) { }

  ngOnInit(): void {
    this.getPolicies();
  }

  getPolicies(){
    this.policyService.getPolicies().subscribe(data=>{
      this.dmca=data;
    })
  }

  edit(id){
    this.id = id;
    this.display = true;
  }
  addNew(){
    this.obs = true;
  }

  newPolicy(){
    let newPol = {
      policyOne: this.polOne,
      policyTwo: this.polTwo,
      policyThree: this.polThree
    }
    
      this.policyService.addPolicies(newPol).subscribe(data => {
      window.location.reload();
    });
    
  }

  postChanges(){
    let changes = {
      policyOne: this.polOne,
      policyTwo: this.polTwo,
      policyThree: this.polThree
    }

    this.policyService.updatePolicy(this.id, changes).subscribe(data => {
      window.location.reload();
    });
  }
  

}
