import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { $ } from 'protractor';
import { text } from '@fortawesome/fontawesome-svg-core';
const httpOptions = {
  headers: new HttpHeaders({
    'content-type':'application/json',
    'Authorization':`Bearer ${JSON.parse(localStorage.getItem('id_token'))}`,
    responseType: 'application/json'
  })
};


@Injectable({
  providedIn: 'root'
})
  

  export class StudentService {
    baseUrl="http://localhost:3000/student/";
      constructor(private http:HttpClient) {  }
       
      viewAssignment(){
        let url=this.baseUrl+ "viewAssignment";
        return this.http.get(url,httpOptions);
      }
      submitAssignment(assignment){
        let body=JSON.stringify(assignment);
        let url=this.baseUrl+ "submitAssignment";
        return this.http.post(url,body,httpOptions);
      }
      }