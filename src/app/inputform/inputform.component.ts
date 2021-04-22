
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-inputform',
  templateUrl: './inputform.component.html',
  styleUrls: ['./inputform.component.css']
})
export class InputformComponent implements OnInit {
  private _jsonURL = 'assets/json_data.json';
  public minDate: Date = new Date ("05/07/2017");
    public maxDate: Date = new Date ("05/27/2017");
    public dateValue: Date = new Date ("05/16/2017");
  public header:string;
  public genderlist:any;
  public countryList:any;
  public termsList: any;
  constructor(private http: HttpClient) {
    this.getJSON().subscribe(data => {
     console.log("data received",data);
     var jsonArray=data;
     jsonArray.forEach(elementObject=> { 
       if(elementObject.type=="header"){
         this.header=`<header><${elementObject.subtype}>${elementObject.label}</${elementObject.subtype}></header>`;
       }
       if(elementObject.type=="header"){
        this.header=`<header><${elementObject.subtype}>${elementObject.label}</${elementObject.subtype}></header>`;
      }
      if(elementObject.type=="radio-group"){
        this.genderlist=elementObject.values;
      }
      if(elementObject.type=="select"){
        this.countryList=elementObject.values;
      }
      if(elementObject.type=="checkbox-group"){
        this.termsList=elementObject.values;
      }
      });
    });
  }

  public getJSON(): Observable<any> {
    return this.http.get(this._jsonURL);
  }
  ngOnInit() {
  }
}
