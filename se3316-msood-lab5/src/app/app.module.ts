import { KeywordFilterPipe } from './courses/keyword-filter.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { SubjectFilterPipe } from './courses/subject-filter.pipe';
import { CourseNumberFilterPipe } from './courses/courseNumber-filter.pipe';
import { CourseComponentFilterPipe } from './courses/courseComponent-filter.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RegistrationComponent } from './registration/registration.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    SubjectFilterPipe,
    CourseNumberFilterPipe,
    CourseComponentFilterPipe,
    KeywordFilterPipe,
    RegistrationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
