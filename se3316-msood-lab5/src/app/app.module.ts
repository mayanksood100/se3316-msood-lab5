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
import { PublicSchedulesComponent } from './public-schedules/public-schedules.component';
import { AdministratorComponent } from './administrator/administrator.component';
import { CoursesReviewComponent } from './courses-review/courses-review.component';
import { EditUserPrivilegesComponent } from './edit-user-privileges/edit-user-privileges.component';
import { EditReviewVisibilityComponent } from './edit-review-visibility/edit-review-visibility.component';
import { ManagePoliciesComponent } from './manage-policies/manage-policies.component';
import { ViewPolicyComponent } from './view-policies/view-policies.component';
import { ChangePasswordComponent } from './change-password/change-password.component';


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
    UserProfileComponent,
    PublicSchedulesComponent,
    AdministratorComponent,
    CoursesReviewComponent,
    EditUserPrivilegesComponent,
    EditReviewVisibilityComponent,
    ViewPolicyComponent,
    ManagePoliciesComponent,
    ChangePasswordComponent,
  
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
