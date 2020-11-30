import { Injectable } from '@angular/core';
import { environment } from './../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  private SERVER_URL = environment.SERVER_URL;
  noAuthHeader = { headers: new HttpHeaders({ 'NoAuth': 'True' }) };
  constructor(private http: HttpClient) { }

  addNewReview(createBody){
    const httpHeaders = new HttpHeaders();
    httpHeaders.append('content-type', 'application/json');

    return this.http.post<[]>(this.SERVER_URL + '/secure/review', createBody);
  }

  getAllReviews(){
    return this.http.get<[]>(this.SERVER_URL + '/secure/reviews');
  }

  getReview(title:string){
    const url = `${this.SERVER_URL}/secure/review/${title}`;
    return this.http.get<String>(url);
  }

  editReview(title:string, updatedBody){
    const url = `${this.SERVER_URL}/secure/review/${title}`;

    const httpHeaders = new HttpHeaders();
    httpHeaders.append('content-type', 'application/json');

    return this.http.put<[]>(url, updatedBody);
  }




}
