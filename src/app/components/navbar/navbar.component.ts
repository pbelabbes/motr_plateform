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
  isLogged:boolean;

  constructor(public authService:AuthService, public router:Router) { }

  ngOnInit() {
    this.isLogged=this.authService.isLoggedIn;
  }

  public logout(){
    this.authService.SignOut();
  }

  public login(){
    this.router.navigate(['login']);
  }

  public register(){
    this.router.navigate(['register']);
  }

  public home(){
    this.router.navigate(['/']);
  }
}
