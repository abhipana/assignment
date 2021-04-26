import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { InputformComponent } from './inputform/inputform.component';
import { OutputformComponent } from './outputform/outputform.component';
import { FormsModule } from '@angular/forms';
import { DatePickerModule } from '@syncfusion/ej2-angular-calendars';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RequiredComponent } from './required/required.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './../app/app-routing/app-routing.module';
@NgModule({
  declarations: [
    AppComponent,
    InputformComponent,
    OutputformComponent,
    RequiredComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    DatePickerModule,
    NgbModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
