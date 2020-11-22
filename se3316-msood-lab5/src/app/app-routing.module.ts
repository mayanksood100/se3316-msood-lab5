import { RegistrationComponent } from './registration/registration.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';


const routes: Routes = [
{ path: '', redirectTo: '/courses', pathMatch: 'full'},
{ path: 'courses', component: CoursesComponent},
{path:'register', component:RegistrationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
