import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-questionnaireaction',
  templateUrl: './questionnaireaction.component.html',
  styleUrls: ['./questionnaireaction.component.scss']
})
export class QuestionnaireactionComponent implements OnInit {

  constructor(private activeroute:ActivatedRoute) { }

  ngOnInit() {
    this.activeroute.params.subscribe(
      (params:any)=>{
        debugger;
      }
    )
  }

}
