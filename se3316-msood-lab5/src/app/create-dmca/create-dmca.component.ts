import { DmcaService } from './../dmca.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-dmca',
  templateUrl: './create-dmca.component.html',
  styleUrls: ['./create-dmca.component.css']
})
export class CreateDmcaComponent implements OnInit {
  dmca: Object;
  id: String;
  polOne: String = "";
  polTwo: string = "";
  polThree: string = "";
  display: Boolean = false;
  obs: Boolean = false;

  constructor(private route: Router, private dmcaService:DmcaService) { }

  ngOnInit(): void {
    this.getDmca();
  }

  getDmca(){
    this.dmcaService.getDmca().subscribe(data=>{
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
    
      this.dmcaService.postDmca(newPol).subscribe(data => {
      window.location.reload();
    });
    
  }

  postChanges(){
    let changes = {
      policyOne: this.polOne,
      policyTwo: this.polTwo,
      policyThree: this.polThree
    }

    this.dmcaService.updatePolicy(this.id, changes).subscribe(data => {
      window.location.reload();
    });
  }
  

}
