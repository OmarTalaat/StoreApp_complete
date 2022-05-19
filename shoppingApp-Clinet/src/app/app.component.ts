import { Component } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { User } from './_models/user';
import { AuthService } from './_service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  jwtHelper = new JwtHelperService();
  myCount: number = 0;


  constructor(private authService: AuthService ){}



  ngOnInit() {

const token = localStorage.getItem('token');
const user: User = JSON.parse(localStorage.getItem('user') || '{}');

if (token) {
this.authService.decodedToken = this.jwtHelper.decodeToken(token);
}
if (user) {
this.authService.currentUser = user;
}}

countChange(event: any) {
  this.myCount = event;
}
}
