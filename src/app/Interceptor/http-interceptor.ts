import { LoaderService } from './../../../../WholeInOne/src/app/service/loader/loaderservice';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { delay, finalize, Observable, timeout } from "rxjs";
import { Injectable } from '@angular/core';

@Injectable()
export class Interceptor implements HttpInterceptor {
    

    constructor(private loaderService : LoaderService) {
    }
    
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.loaderService.show();
        const Arav = 'Hemnath';
        return next.handle(req.clone({setHeaders:{Arav}}))
        .pipe(delay(3000),finalize(()=>this.loaderService.hide()));
    }

}
