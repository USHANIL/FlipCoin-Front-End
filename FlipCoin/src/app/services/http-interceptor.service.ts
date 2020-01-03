import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {

   headers;
  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    if (sessionStorage.getItem('username') && sessionStorage.getItem('token')) {

      this.headers = new HttpHeaders({
        'Authorization': sessionStorage.getItem('token'),
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
        'Content-Type': 'application/json'
      });
      // req = req.clone({
      //   headers: new HttpHeaders({
      //     'Authorization': sessionStorage.getItem('token'),
      //     'Access-Control-Allow-Origin' : '*',
      //     'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      //     'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
      //     'Content-Type': 'application/json'
      //   })
      // });
      
    }
    const cloneReq = req.clone(this.headers);
    return next.handle(cloneReq);
  }
}
