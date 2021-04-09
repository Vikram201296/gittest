import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  toggled:boolean = false;
  @Output() tooglemenu = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit() {
  }
  ontoggle(){
    this.toggled = !this.toggled;
    this.tooglemenu.emit(this.toggled);
  }

}
