import { Injectable } from '@angular/core';
import Keycloak from 'keycloak-js';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private keycloak = new Keycloak({
    url: environment.keycloak.url,
    realm: environment.keycloak.realm,
    clientId: environment.keycloak.clientId
  });

  async init(): Promise<boolean> {
    return this.keycloak.init({
      onLoad: 'login-required',
      checkLoginIframe: false
    });
  }

  async getToken(): Promise<string> {
    await this.keycloak.updateToken(30);
    return this.keycloak.token ?? '';
  }

  isLoggedIn(): boolean {
    return !!this.keycloak.authenticated;
  }

  getUsername(): string {
    return this.keycloak.tokenParsed?.['preferred_username'] ?? '';
  }

  getRoles(): string[] {
    const realmAccess = this.keycloak.tokenParsed?.['realm_access'] as { roles?: string[] } | undefined;
    return (realmAccess?.roles ?? []).map(role =>
      role.startsWith('ROLE_') ? role : `ROLE_${role}`
    );
  }

  hasRole(role: string): boolean {
    return this.getRoles().includes(role);
  }

  logout(): void {
    this.keycloak.logout({
      redirectUri: window.location.origin
    });
  }
}
