import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessangerService {
  formObject: any=[];
  setter(form:any){
      this.formObject=form;
      console.log("data updated", this.formObject);
  }
  getter (){
    return this.formObject;
  }
  constructor() { }
}
