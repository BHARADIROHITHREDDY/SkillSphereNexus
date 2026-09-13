import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { from } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);

  // Only attach token to backend API calls
  if (!req.url.startsWith('http://localhost:8090')) {
    return next(req);
  }

  return from(authService.getToken()).pipe(
    switchMap(token => {
      const request = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
      return next(request);
    })
  );
};
