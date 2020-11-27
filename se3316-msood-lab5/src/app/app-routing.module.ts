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

const routes: Routes = [
{ path: '', redirectTo: '/courses', pathMatch: 'full'},
{ path: 'courses', component: CoursesComponent},
{path:'register', component:RegistrationComponent},
{path:'login', component:LoginComponent},
{path:'user-detail', component:UserProfileComponent, canActivate:[AuthGuard]},
{ path: 'schedules', component: SchedulesComponent,canActivate:[AuthGuard] },
{path:'createSchedule', component:CreateSchedulesComponent, canActivate:[AuthGuard]},
{path:'editSchedule/:name', component: EditScheduleComponent, canActivate:[AuthGuard]},
{path:'publicSchedules', component:PublicSchedulesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
