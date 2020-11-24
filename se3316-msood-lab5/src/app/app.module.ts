import { UserProfileComponent } from './user-detail/user-detail.component';
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
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { SchedulesComponent } from './schedules/schedules.component';
import { CreateSchedulesComponent } from './create-schedules/create-schedules.component';
import { EditScheduleComponent } from './edit-schedule/edit-schedule.component';
import { AuthGuard } from './auth/auth.guard';
import { AuthInterceptor } from './auth/auth-inceptor';



@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    SubjectFilterPipe,
    CourseNumberFilterPipe,
    CourseComponentFilterPipe,
    KeywordFilterPipe,
    RegistrationComponent,
    LoginComponent,
    SchedulesComponent,
    CreateSchedulesComponent,
    EditScheduleComponent,
    UserProfileComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,
    useClass:AuthInterceptor,
    multi:true
  },
    AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
