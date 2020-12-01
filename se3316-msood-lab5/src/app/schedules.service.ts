import { Observable } from 'rxjs';
import { Schedule } from './schedule';
import { environment } from './../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, Pipe } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SchedulesService {
  private SERVER_URL = environment.SERVER_URL;
  noAuthHeader = { headers: new HttpHeaders({ 'NoAuth': 'True' }) };
  constructor(private http: HttpClient) { }

  getAllSchedules(){
    return this.http.get<Schedule[]>(this.SERVER_URL + '/secure/schedule');
  }

  getPublicSchedules(){
    return this.http.get<Schedule[]>(this.SERVER_URL + '/open/publicSchedules', this.noAuthHeader);
  }

  getSchedule(name:string){
    const url = `${this.SERVER_URL}/secure/schedule/${name}`;
    return this.http.get<Schedule>(url);
  }

  addNewSchedule(createBody){

    const httpHeaders = new HttpHeaders();
    httpHeaders.append('content-type', 'application/json');

    return this.http.post<Schedule[]>(this.SERVER_URL + '/secure/schedule', createBody);
  }

  editSchedule(name:string, updatedBody){
    const url = `${this.SERVER_URL}/secure/schedule/${name}`;

    const httpHeaders = new HttpHeaders();
    httpHeaders.append('content-type', 'application/json');

    return this.http.put<Schedule[]>(url, updatedBody);
  }

  deleteSchedule(name:string){
    const url = `${this.SERVER_URL}/secure/schedule/${name}`
    return this.http.delete<Schedule>(url);
  }

  deleteAllSchedules(){
    return this.http.delete<Schedule[]>(this.SERVER_URL + '/secure/schedule');
  }

  

}
