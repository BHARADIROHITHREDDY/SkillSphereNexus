import { Routes } from '@angular/router';
import { CareerComponent } from './pages/career/career.component';
import { JobsComponent } from './pages/jobs/jobs.component';
import { AnalyticsComponent } from './pages/analytics/analytics.component';
import { authGuard } from './guards/auth.guard';
import { ShowcaseComponent } from './pages/showcase/showcase.component';
import { roleGuard } from './guards/role.guard';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ManagementComponent } from './pages/management/management.component';
import { AccessDeniedComponent } from './pages/access-denied/access-denied.component';
import { AssessmentComponent } from './pages/assessment/assessment.component';

export const routes: Routes = [
  { path: 'showcase', component: ShowcaseComponent },

  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [authGuard]
  },

  {
    path: 'employees',
    component: ManagementComponent,
    canActivate: [roleGuard(['ROLE_ADMIN', 'ROLE_HR'])],
    data: { screen: 'employees' }
  },

  {
    path: 'skills',
    component: ManagementComponent,
    canActivate: [authGuard],
    data: { screen: 'skills' }
  },

  {
    path: 'assessment',
    component: AssessmentComponent,
    canActivate: [authGuard]
  },

  {
    path: 'learning',
    component: ManagementComponent,
    canActivate: [authGuard],
    data: { screen: 'learning' }
  },

  {
    path: 'certifications',
    component: ManagementComponent,
    canActivate: [authGuard],
    data: { screen: 'certifications' }
  },

  {
    path: 'career',
    component: CareerComponent,
    canActivate: [
      roleGuard(['ROLE_ADMIN', 'ROLE_HR', 'ROLE_TRAINING_MANAGER'])
    ]
  },

  {
    path: 'access-denied',
    component: AccessDeniedComponent,
    canActivate: [authGuard]
  },

  {
    path: 'jobs',
    component: JobsComponent,
    canActivate: [authGuard]
  },

  {
    path: 'analytics',
    component: AnalyticsComponent,
    canActivate: [authGuard]
  },

  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  }
];
