import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from '../_models/user';
import { AlertifyService } from '../_service/alertify.service';
import { AuthService } from '../_service/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  user: User | undefined;
  registerdMode = false;
  values: any;
  model: any = {};
  isLoggedin: boolean | undefined;
  currentUser: User | undefined;
  refresh_token: any;
  isLoading: boolean | undefined;
  subscription: Subscription | undefined;
  username!:string;
  password!:string;

  constructor(public authService: AuthService, private alertify: AlertifyService,
    private router: Router) { }

  ngOnInit() {
  }

  registerToggel() {
    this.registerdMode = true;
  }

  cancelRegisterMode(registerdMode: boolean) {

    this.registerdMode = registerdMode;
     }

     login() {
      this.authService.login(this.model).subscribe(next => {
       this.alertify.success('logged in successfully');
       }, error => {
         this.alertify.error(error);

       } , () => {this.router.navigate(['/products']); }
       );
     }
      loggedIn() {
        return this.authService.loggedIn();
     }



     logout() {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      this.authService.decodedToken = null;
      this.alertify.message('logged out');
      this.router.navigate(['/home']);

   }


}


