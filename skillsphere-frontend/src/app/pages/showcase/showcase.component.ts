import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

type ScreenKey = 'skills' | 'learning' | 'certifications' | 'career';

@Component({
  selector: 'app-showcase', standalone: true, imports: [CommonModule],
  templateUrl: './showcase.component.html', styleUrl: './showcase.component.scss'
})
export class ShowcaseComponent {
  active: ScreenKey = 'skills';
  readonly nav = [['Dashboard', 'skills'], ['Employees', 'skills'], ['Learning', 'learning'], ['Certifications', 'certifications'], ['Career', 'career'], ['Training', 'learning'], ['Analytics', 'career']] as const;
  readonly screens: Record<ScreenKey, any> = {
    skills: { milestone: 'Milestone 1: Employee Skill Management', title: 'Skill Profiles & Competency', active: 'Dashboard', cards: [['Employees', '12.4K', 'Active'], ['Skills Tracked', '2,847', 'Catalog'], ['Assessments', '847/month', 'Completed']], service: 'Skill Service - Employee Skill Profile', lines: ['Employee: John Smith | Role: Developer | Dept: Engineering', 'Skills: Java 8/10, Spring Boot 7/10, Angular 6/10', 'Certifications: AWS SAA (Valid), Java OCP (Expired)', 'Assessment: Spring Boot | Score: 87% | Verified', 'Competency: Tech Lead | Gap: Angular 3 points', 'Experience: 5 years | Projects: 12 | Rating: 4.2/5'], actions: '[Assess Skill] [Add Certification] [Career Plan]' },
    learning: { milestone: 'Milestone 2: Learning Management', title: 'Courses & Learning Paths', active: 'Learning', cards: [['Courses', '847', 'Available'], ['Enrollments', '12.4K', 'This month'], ['Completion', '87%', 'Rate']], service: 'Learning Service - Course Management', lines: ['Course: Spring Boot 4 Microservices | Duration: 40h', 'Enrolled: 247 employees | Completed: 189 | In Progress: 58', 'Learning Path: Java Full Stack | Progress: 67%', 'Courses: Java 25 ✓ Spring Boot 4 ✓ Angular 20 (In Progress)', 'Type: Online | Instructor: Jane Doe | Rating: 4.8/5', 'Assessment: Final Exam | Score: 92% | Passed'], actions: '[Enroll] [Continue] [Certificate]' },
    certifications: { milestone: 'Milestone 3: Certification Management', title: 'Tracking & Renewals', active: 'Certifications', cards: [['Certifications', '8.4K', 'Active'], ['Expiring', '247', 'Next 30 days'], ['Renewal Rate', '94%', 'On time']], service: 'Certification Service - Tracking', lines: ['Certification: AWS Solutions Architect | Employee: John Smith', 'Issued: 15-Mar-2025 | Expiry: 15-Mar-2028 | Status: Valid', 'Renewal: Due in 247 days | Notification: Sent', 'Certification: Java OCP | Status: Expired | Renew: Required', 'Reports: 8.4K active | 247 expiring | 94% renewal', 'Alert: 12 certifications expiring this week'], actions: '[Renew] [View Certificate] [Report]' },
    career: { milestone: 'Milestone 4: Career & Analytics', title: 'Career Planning & Reports', active: 'Career', cards: [['Career Plans', '2,847', 'Active'], ['Promotions', '247', 'This year'], ['Skill Coverage', '87%', 'Department']], service: 'Career Service - Development Planning', lines: ['Employee: John Smith | Current: Developer | Goal: Tech Lead', 'Roadmap: Developer → Senior Dev → Tech Lead', 'Progress: 67% | Gaps: Angular +3, Leadership +2', 'Training: Angular Bootcamp | Mentor: Jane Doe', 'Promotion: Eligible in 3 months | Criteria: 80%', 'Internal Jobs: 12 matches | Tech Lead - 3 openings'], actions: '[Update Plan] [Apply Job] [Schedule Training]' }
  };
  select(screen: ScreenKey) { this.active = screen; }
}
