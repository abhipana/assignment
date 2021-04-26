import { MessangerService } from './../messanger.service';

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
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
public date:any;
  public modal:any;
  public names = [{value: ''}, {value: ''}, {value: ''}];
  public age:any;
  public radioSelected:any;
  public countrySelected:any;
  public address:any;
  public terms:any;
  public dateObject: any;

  jsonArray: any;
  public myFormGroup: any;

  constructor(private http: HttpClient,private messangerService: MessangerService,private router: Router) {
    this.getJSON().subscribe(data => {
     let textobj:any;
     data.forEach(elementObject=> { 
      textobj = new FormControl('');
       if(elementObject.type=="header"){
         this.header=`<header><${elementObject.subtype}>${elementObject.label}</${elementObject.subtype}></header>`;
       }
      });
      data.splice(0,2);
      this.jsonArray=data;
      console.log("data received", this.jsonArray);
      this.myFormGroup = new FormGroup({textobj});
    });
  }
  public onlycharacter(event:any,field:any){
      var classlist=document.getElementsByTagName("input")[field].className;
      console.log(classlist)
      if(classlist.indexOf("ng-invalid")!=-1){
        document.getElementsByTagName("p")[field].innerHTML="Numbers not allowed";
      }
  }
  validation(event:any,field:any){
    var classlist=document.getElementsByTagName("input")[field].className;
      console.log(classlist)
      if(classlist.indexOf("ng-valid")!=-1){
        document.getElementsByTagName("p")[field].innerHTML="";
      }
  }
  ageValueCheck(event:any,field:any){
    console.log(field)
    if(!(this.age>=20 && this.age<=65)){
      document.getElementsByTagName("p")[3].innerHTML="Please Enter valid age";
    }
    else{
      document.getElementsByTagName("p")[3].innerHTML="";
    }
  }

  public onSubmit(){
    var formObject={
      "fullname":this.names[0].value+" "+this.names[1].value+" "+this.names[2].value,
      "DOB":this.date,
      "age":this.age,
      "gender":this.radioSelected,
      "address":this.address,
      "country":this.countrySelected,
      "terms":this.terms
    }
    this.messangerService.setter(formObject);
      console.log("value entered",this.names[0].value,this.names[1].value,this.names[2].value+" "+this.date+" "+this.age+" "+this.radioSelected+" "+this.countrySelected+" "+this.address+" "+this.terms);
      this.router.navigate(['/outputform-component']);
  }
  public getJSON(): Observable<any> {
    return this.http.get(this._jsonURL);
  }
  ngOnInit() {
  }
}
