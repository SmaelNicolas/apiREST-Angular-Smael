import { Injectable } from '@angular/core';
import { UserInterface } from '../../models/user.interface';
import { Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private URL_USERS = 'https://626d20425267c14d56782828.mockapi.io/api/v1/';

  constructor(private http: HttpClient) {}

  private getHttpOptions() {
    return {
      headers: new HttpHeaders({
        'content-type': 'application/json',
      }),
    };
  }

  private handleError(error: HttpErrorResponse) {
    /* Error Http FRONTEND */
    if (error.error instanceof ErrorEvent) {
      alert('Error de Frontend:' + error.error.message);
    } else {
      /* Error Http BACKEND */
      alert(
        `Error de Backend: ${error.status}, cuerpo del error: ${error.message}`
      );
    }
    return throwError('Error de comunicación Http');
  }

  getUsers(): Observable<UserInterface[]> {
    return this.http
      .get<UserInterface[]>(this.URL_USERS + 'users')
      .pipe(catchError(this.handleError));
  }
  getUser(id: number): Observable<UserInterface> {
    return this.http
      .get<UserInterface>(this.URL_USERS + 'users/' + id)
      .pipe(catchError(this.handleError));
  }
  saveUser(usuario: UserInterface) {
    return this.http
      .post<UserInterface>(
        this.URL_USERS + 'users/',
        usuario,
        this.getHttpOptions()
      )
      .pipe(catchError(this.handleError));
  }
  updateUser(usuario: UserInterface, id: number | undefined) {
    return this.http
      .put<UserInterface>(this.URL_USERS + id, usuario)
      .pipe(catchError(this.handleError));
  }
  deleteUser(id: number | undefined) {
    return this.http
      .delete<UserInterface>(this.URL_USERS + 'users/' + id)
      .pipe(catchError(this.handleError));
  }
}
