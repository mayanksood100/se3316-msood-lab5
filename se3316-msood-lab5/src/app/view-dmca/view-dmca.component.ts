import { DmcaService } from './../dmca.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-dmca',
  templateUrl: './view-dmca.component.html',
  styleUrls: ['./view-dmca.component.css']
})
export class ViewDmcaComponent implements OnInit {
  dmca: Object;
  constructor(private route: Router, private dmcaService:DmcaService) { }

  ngOnInit(): void {
    this.getDmca();
  }

  getDmca(){
    this.dmcaService.getDmca().subscribe(data=>{
      console.log(data);
      this.dmca = data;
    })
  }

}
