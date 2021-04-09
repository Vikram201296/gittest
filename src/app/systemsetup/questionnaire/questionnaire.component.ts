import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.scss']
})
export class QuestionnaireComponent implements OnInit {
  
  questionnaire:Array<any> =[
    {"name":"test","startdate":"2021-03-25","enddate":"2021-03-25"},
    {"name":"test2","startdate":"2021-03-25","enddate":"2021-03-25"},
    {"name":"test3","startdate":"2021-03-25","enddate":"2021-03-25"},
    {"name":"test4","startdate":"2021-03-25","enddate":"2021-03-25"},
    {"name":"test5","startdate":"2021-03-25","enddate":"2021-03-25"},
  ]
  constructor(private router:Router) { }

  ngOnInit() {

  }
  onEdit(i,e){
    // e.name ="sucess";
    //var url = "/systemsetup/questionnaireaction/" + i;
    this.router.navigate(["systemsetup/questionnaireaction/",i]);

  }

  onAdd(){
    this.questionnaire.push({"name":"test7","startdate":"2021-03-25","enddate":"2021-03-25"});
  }

}
