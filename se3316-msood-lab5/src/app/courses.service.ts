import { Injectable } from '@angular/core';
import { environment } from './../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Courses } from './Courses';


@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private SERVER_URL = environment.SERVER_URL;
  noAuthHeader = { headers: new HttpHeaders({ 'NoAuth': 'True' }) };
  constructor(private http: HttpClient) {}

  getAllCourses(){
    return this.http.get<Courses[]>(this.SERVER_URL + '/open/courses', this.noAuthHeader);
  }
  
}
