import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

const apiEndPoint = 'https://apertum-interview.herokuapp.com/api';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private http: HttpClient) {}

  login(payload: any): Observable<Object> {
    return this.http
      .post<Object>(`${apiEndPoint}/user/login`, {
        accountId: payload.id,
        pswd: payload.pwd,
      })
      .pipe(
        catchError(() => {
          return Observable.throw('Unable to login.');
        })
      );
  }

  getUsers(): Observable<Array<Object>> {
    return this.http
      .get<Array<Object>>(`${apiEndPoint}/users`, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem('token')}`,
        },
      })
      .pipe(
        catchError(() => {
          return Observable.throw('Unable to fetch users list.');
        })
      );
  }
}
