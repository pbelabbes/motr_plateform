import { Component, OnInit } from '@angular/core';
import { APPNAME } from '../../Ressources/constants';
import { AuthService} from '../../shared/services/auth.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  appName:String=APPNAME;
  isLogged:boolean=this.authService.isLoggedIn;

  constructor(public authService:AuthService, public router:Router) { }

  ngOnInit() {
    
  }

  public logout(){
    this.authService.SignOut();
  }
}
