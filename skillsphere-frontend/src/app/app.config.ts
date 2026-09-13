import { ApplicationConfig, inject, provideAppInitializer } from '@angular/core';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { authInterceptor } from './interceptors/auth.interceptor';
import { AuthService } from './services/auth.service';

export const appConfig: ApplicationConfig = {
  providers: [
    // The showcase is a self-contained presentation screen, so it stays available
    // when local Keycloak has not been started. All application data routes retain
    // their existing route guards and authenticate normally.
    provideAppInitializer(() =>
      window.location.pathname.startsWith('/showcase') ? Promise.resolve(true) : inject(AuthService).init()
    ),
    provideHttpClient(withInterceptors([authInterceptor])),
    provideRouter(routes)
  ]
};
