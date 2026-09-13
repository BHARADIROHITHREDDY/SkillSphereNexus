import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';

export const roleGuard = (roles: string[]): CanActivateFn => () => {
  const auth = inject(AuthService);
  return roles.some(role => auth.hasRole(role)) ? true : inject(Router).parseUrl('/access-denied');
};
