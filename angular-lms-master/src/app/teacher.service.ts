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
  

  export class TeacherService {
    baseUrl="http://localhost:3000/teacher/";
      constructor(private http:HttpClient) {  }
       
    
      addAssignment(assignment){
        let body=JSON.stringify(assignment);
        let url=this.baseUrl+ "addAssignment";
        return this.http.post(url,body,httpOptions);
      }

      viewAttemptAssignment(){
        let url=this.baseUrl+ "viewAttemptAssignment";
        return this.http.get(url,httpOptions);
      }

      }