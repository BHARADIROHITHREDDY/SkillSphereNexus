import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
@Component({selector: 'app-access-denied', standalone: true, imports: [RouterLink], template: '<section><p>ACCESS RESTRICTED</p><h1>You do not have permission to open this page.</h1><a routerLink="/dashboard">Return to dashboard</a></section>', styles: ['section{padding:72px 32px;text-align:center}p{color:#536b9d;font-weight:700;letter-spacing:.1em}a{color:#2563eb}']})
export class AccessDeniedComponent {}
