import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
  
})
export class SideNavComponent implements OnInit {
  @Input() toggled:boolean =false;
  
  menus:Array<any>= [
    {"title":"Quetiner","icon":"fa fa-list","routerlink":"questionnaire"},
    {"title":"Roles","icon":"fa fa-user","routerlink":"role"},
    {"title":"Help","icon":"fa fa-info-circle","routerlink":"tree-grids"},
    {"title":"Message","icon":"fa fa-comments-o","routerlink":"tree-grids"},
    {"title":"Settings","icon":"fa fa-cog","routerlink":"tree-grids"},
    {"title":"Password","icon":"fa fa-key","routerlink":"tree-grids"},
    {"title":"SingnOut","icon":"fa fa-sign-out","routerlink":"tree-grids"},
    {"title":"Profile","icon":"fa fa-user","routerlink":"tree-grids"},
    {"title":"Home","icon":"fa fa-home","routerlink":"tree-grids"},
  ]

  constructor() { }

  ngOnInit() {
  }

}
