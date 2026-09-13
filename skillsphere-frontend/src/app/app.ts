import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgIf, RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  constructor(public auth: AuthService) {}

  canManageEmployees(): boolean {
    return this.auth.hasRole('ROLE_ADMIN') || this.auth.hasRole('ROLE_HR');
  }

  canViewAnalytics(): boolean {
    return this.canManageEmployees() || this.auth.hasRole('ROLE_TRAINING_MANAGER');
  }
}
