import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {
    
    intercept(req, next){
        const authRequest = req.clone({
            headers: req.headers.set('Authorization', 'token ' + 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.e30.KY2gjBzd-ORMMT97OsEkx-Uw6IzKHdU5knMjgULdnAk')
        });
        return next.handle(authRequest);
    }
}
