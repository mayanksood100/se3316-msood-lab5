import { CreateDmcaComponent } from './create-dmca/create-dmca.component';
import { ViewDmcaComponent } from './view-dmca/view-dmca.component';
import { EditUserPrivilegesComponent } from './edit-user-privileges/edit-user-privileges.component';
import { AdministratorComponent } from './administrator/administrator.component';
import { CoursesReviewComponent } from './courses-review/courses-review.component';
import { UserProfileComponent } from './user-detail/user-detail.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';
import { SchedulesComponent } from './schedules/schedules.component';
import { CreateSchedulesComponent } from './create-schedules/create-schedules.component';
import { EditScheduleComponent } from './edit-schedule/edit-schedule.component';
import { PublicSchedulesComponent } from './public-schedules/public-schedules.component';
import { AuthGuard } from './auth/auth.guard';
import { EditReviewVisibilityComponent } from './edit-review-visibility/edit-review-visibility.component';

const routes: Routes = [
{ path: '', redirectTo: '/courses', pathMatch: 'full'},
{ path: 'courses', component: CoursesComponent},
{path:'register', component:RegistrationComponent},
{path:'login', component:LoginComponent},
{path:'publicSchedules', component:PublicSchedulesComponent},
{path:'user-detail', component:UserProfileComponent, canActivate:[AuthGuard]},
{ path: 'schedules', component: SchedulesComponent,canActivate:[AuthGuard] },
{path:'createSchedule', component:CreateSchedulesComponent, canActivate:[AuthGuard]},
{path:'editSchedule/:name', component: EditScheduleComponent, canActivate:[AuthGuard]},
{path:'addReview', component:CoursesReviewComponent, canActivate:[AuthGuard]},
{path:'admin', component:AdministratorComponent, canActivate:[AuthGuard]},
{path:'editUserPrivilege/:username', component: EditUserPrivilegesComponent, canActivate:[AuthGuard]},
{path:'editReviewVisibility/:title', component: EditReviewVisibilityComponent, canActivate:[AuthGuard]},
{ path: 'viewDmca', component: ViewDmcaComponent},
{path: 'createDmca', component:CreateDmcaComponent, canActivate:[AuthGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
