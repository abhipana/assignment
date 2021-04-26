import { OutputformComponent } from './../outputform/outputform.component';
import { InputformComponent } from './../inputform/inputform.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router'; 
const routes: Routes = [
  { path:'',redirectTo:'inputform-component', pathMatch:'full'},
   { path: 'inputform-component', component: InputformComponent },
  { path: 'outputform-component', component: OutputformComponent },
];
@NgModule({
  declarations: [],
  imports: [CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { 
  
}
