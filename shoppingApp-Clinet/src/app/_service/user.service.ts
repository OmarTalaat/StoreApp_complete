import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../_models/user';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl = environment.apiUrl;

constructor(private http: HttpClient , private authService: AuthService) { }

getUser(id: number): Observable<User> {
  return this.http.get<User>(this.baseUrl + 'users/' + id);

}
getUsers(): Observable<User[]> {
  return this.http.get<User[]>(this.baseUrl + 'users' );
 }


updateUser(id: number, user: User) {
 return this.http.put(this.baseUrl + 'users/' + id, user);
}

passwordCheck(id: number , currentPassword: string) {

return this.http.get<any[]>(this.baseUrl + 'users/' + id + '/VerifyPassword?currentPassword=' + currentPassword);

}

}
