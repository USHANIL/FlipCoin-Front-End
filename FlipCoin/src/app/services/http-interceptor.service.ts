import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService  implements HttpInterceptor{

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler){
    if(sessionStorage.getItem('username') && sessionStorage.getItem('token')){
      req = req.clone({
        setHeaders: {
          Authorization: sessionStorage.getItem('token'),
          'Access-Control-Allow-Origin' : '*',
          'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
          'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
          'Content-Type': 'application/json'
        }
      })
    }
    return next.handle(req);
  }
}
