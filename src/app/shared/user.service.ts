import { Injectable } from '@angular/core';
// import { Song } from './song';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { HTTP } from '@ionic-native/http/ngx';
@Injectable({
  providedIn: 'root'
})

export class UserService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  addUser(user: any): Observable<any> {
    return this.http.post<any>('http://emivalue.snitchmedia.in/Login/applogin', user, this.httpOptions)
      // return this.http.post<any>('http://emivalue.snitchmedia.in/Crud/test', user, this.httpOptions)
      .pipe(
        catchError(this.handleError<any>('Add User'))
      )
      // .subscribe((data)=>{
      //   this.param.data = data;
      //   alert('subscribe : ' + JSON.stringify(data));
      //   })
      ;

      // .pipe(catchError( data => of(I caught: ${JSON.stringify(data)})))
      // .subscribe((data)=>{
      //   this.param.data = data;
      //   alert('subscribe : ’ + JSON.stringify(data));
      //   }
  }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      alert(error+' detailed '+`${operation} failed: ${error.message}`)
      return of(result as T);
    };
  }
}