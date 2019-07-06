import { Component, OnInit } from '@angular/core';
import { APPNAME } from '../../Ressources/constants';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  appName:String=APPNAME;
  constructor() { }

  ngOnInit() {
  }

}
