import { Component, OnInit } from '@angular/core';
import { MessangerService } from './../messanger.service';

import { Router } from '@angular/router';
@Component({
  selector: 'app-outputform',
  templateUrl: './outputform.component.html',
  styleUrls: ['./outputform.component.css']
})
export class OutputformComponent implements OnInit {
 

  constructor(private messangerService:MessangerService,private router: Router) { }
  public formObject:any;
  ngOnInit() {
    this.formObject= this.messangerService.getter();
    console.log(this.formObject)
  }
  public edit(){
    this.router.navigate(['/inputform-component']);
  }
}
