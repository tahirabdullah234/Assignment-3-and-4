import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{TeacherService} from '../teacher.service';
@Component({
  selector: 'app-add-assignment',
  templateUrl: './add-assignment.component.html',
  styleUrls: ['./add-assignment.component.css']
})
export class AddAssignmentComponent implements OnInit {

  assignmentCreated:boolean=false
  tid:String=""
  question:string="";//Two way databinding
  name:string="";//Two way databinding
  subject:string="";//Two way databinding

  options=[];//For Event Binding
  constructor(private router: Router,private _data:TeacherService) { }

  ngOnInit() {
    this.loader()    
  }

  loader(){
    
  var currentUser = JSON.parse(localStorage.getItem("user"));
  // console.log("Current User",currentUser)
  this.tid=currentUser._id
  // console.log(this.tid)
  }
createAssignment(){
  console.log("Create")
  if(this.name.length==0){
    alert("Please enter quiz name")
    return
  }
  if(this.subject.length==0){
    alert("Please enter subject name")
    return
  }
  if(this.question.length==0){
    alert("Please enter question name")
    return
  }
  var ret;
  let assignment={
    name:this.name,
    question:this.question,
    subject:this.subject
  };
this._data.addAssignment(assignment).subscribe(
  data => { ret=data},
  err => console.error(err),
  () => {
    console.log('Assignment Created')
    // let data=JSON.parse(ret)
    console.log(ret._id)
    alert("Assignment created Successfully");
    this.name='';
    this.subject=''
    this.question=''
    console.log("DATA",ret)
  }
  );
  

}
  
addOption(){
  // console.log("Add")
  this.options.push(this.option)
  this.option=''
}

addQuiz(){
  // console.log("Add QUiz")
  if(this.question.length==0){
    alert("Please enter name of question")
    return
  }
  if(this.answer.length==0){
    alert("Please enter correct option")
    return
  }
  if(this.options.length==0){
    alert("Please add options")
    return
  }
  var ret;
  let quiz={
    question:this.question,
    options:this.options,
    answer:this.answer
  };
this._data.addQuiz(this.qid,quiz).subscribe(
  data => { ret=data},
  err => console.error(err),
  () => {
    console.log('Question Added')
    // let data=JSON.parse(ret)
    console.log(ret)
    this.totalquestions=ret.quiz.length
  }
  );
  alert("Question added Successfully");
  this.question='';
  this.option=''
  this.options=[]
  this.answer=''
  // console.log("DATA",ret)
}

endQuiz(){
  this.router.navigateByUrl('/viewQuizzes')
}
remOption(i){
  this.options.splice(i,1);
  }
}
