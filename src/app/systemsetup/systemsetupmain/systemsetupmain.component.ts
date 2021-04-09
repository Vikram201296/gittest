import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-systemsetupmain',
  templateUrl: './systemsetupmain.component.html',
  styleUrls: ['./systemsetupmain.component.scss']
})
export class SystemsetupmainComponent implements OnInit {
  togle:boolean = false;
  constructor() { }

  ngOnInit() {
  }
  haedertoggled(e){
      this.togle = e;
      
  }
}
