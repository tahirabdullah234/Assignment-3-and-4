import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{StudentService} from '../student.service';
@Component({
  selector: 'app-view-assignment',
  templateUrl: './view-assignment.component.html',
  styleUrls: ['./view-assignment.component.css']
})
export class ViewAssignmentComponent implements OnInit {

  tid:String=""
  question:string="";//Two way databinding
  name:string="";//Two way databinding
  subject:string="";//Two way databinding

  options=[];//For Event Binding
  constructor(private router: Router,private _data:StudentService) { }

  ngOnInit() {
    // this.loader()  
    this.viewAssignment()  
  }

  // loader(){
    
  // var currentUser = JSON.parse(localStorage.getItem("user"));
  // // console.log("Current User",currentUser)
  // this.tid=currentUser._id
  // // console.log(this.tid)
  // }
viewAssignment(){
  console.log("View")
  
  var ret;
  
this._data.viewAssignment().subscribe(
  data => { ret=data},
  err => console.error(err),
  () => {
    console.log('Assignment Recieved')
    // let data=JSON.parse(ret)
    console.log(ret._id)
    alert("Assignment received Successfully");
    this.name=ret[0].name;
    this.subject=ret[0].subject
    this.question=ret[0].question
    console.log("DATA",ret)
  }
  );
  

}
}
