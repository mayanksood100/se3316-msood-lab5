import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  private SERVER_URL = environment.SERVER_URL;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  addnewUser(createBody){
    const httpHeaders = new HttpHeaders();
    httpHeaders.append('content-type', 'application/json');
    return this.http.post<[]>(this.SERVER_URL + '/register', createBody);
  }

  submitRegistrationForm(form): void {

  const newFormData = {UserName:form.value.username, Email:form.value.email, Password:form.value.password};
   console.log(form.value.username);
   console.log(form.value.email);
   console.log(form.value.password);
  this.addnewUser(newFormData).subscribe(data=>console.log(data));

  }

}
