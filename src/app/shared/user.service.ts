import { Injectable } from '@angular/core';
// import { Song } from './song';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HTTP } from '@ionic-native/http/ngx';
import { LoadingController } from '@ionic/angular';
@Injectable({
  providedIn: 'root'
})

export class UserService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  public baseurl = 'http://emivalue.snitchmedia.in/api'

  constructor(private http: HttpClient, private http2: HTTP, public loadingController: LoadingController) { }

  getcategory(): Observable<any> {
    return this.http.get<any>(this.baseurl + '/getcategory', this.httpOptions)
      .pipe(
        catchError(this.handleError<any>('get category error'))
      );

  }
  uploadFile(data: any): Observable<any> {
    return this.http.post<any>(this.baseurl + '/appupload', data, this.httpOptions)
      .pipe(
        catchError(this.handleError<any>('Upload file error'))
      );

  }
  addUser(user: any): Observable<any> {
    //    this.http2.post(this.baseurl+'/appadduser', user, {})
    //   .then(data => {

    //     console.log(data.status);
    //     console.log(data.data); // data received by server
    //     console.log(data.headers);
    // return data;
    //   })
    //   .catch(error => {

    //     console.log(error.status);
    //     console.log(error.error); // error message as string
    //     console.log(error.headers);

    //   });
    return this.http.post<any>(this.baseurl + '/appadduser', user, this.httpOptions)
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
  login(user: any): Observable<any> {
    return this.http.post<any>(this.baseurl + '/applogin', user, this.httpOptions)
      .pipe(
        catchError(this.handleError<any>('Add User'))
      );
  }
  otplogin(user: any): Observable<any> {
    return this.http.post<any>(this.baseurl + '/appotplogin', user, this.httpOptions)
      .pipe(
        catchError(this.handleError<any>('Add User'))
      );
  }
  personalloancreate(data: any): Observable<any> {
    return this.http.post<any>(this.baseurl + '/test1', data, this.httpOptions)
      .pipe(
        catchError(this.handleError<any>('Add Persnoal Loan'))
      );
  }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      alert(error + ' detailed ' + `${operation} failed: ${error.message}`)
      return of(result as T);
    };
  }
  // Show the loader for infinite time
  showLoader(text?:any) {

    this.loadingController.create({
      message: 'Please wait...'
    }).then((res) => {
      res.present();
    });

  }

  // Hide the loader if already created otherwise return error
  hideLoader() {
    setTimeout(() => {
      this.loadingController.dismiss(null, 'cancel').then((res) => {
        console.log('Loading dismissed!', res);
      }).catch((error) => {
        console.log('error', error);
      });
    }, 2000);

  }
}