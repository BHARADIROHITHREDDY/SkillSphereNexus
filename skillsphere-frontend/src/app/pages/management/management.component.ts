import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

type Screen = 'employees' | 'skills' | 'learning' | 'certifications';

@Component({
  selector: 'app-management',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './management.component.html',
  styleUrl: './management.component.scss'
})
export class ManagementComponent implements OnInit {

  screen: Screen = 'skills';

  readonly content: Record<
    Screen,
    {
      title: string;
      subtitle: string;
      action: string;
      headers: string[];
      rows: string[][];
    }
  > = {

    employees: {
      title: 'Employees',
      subtitle: 'Manage the workforce and their development records.',
      action: '+ Add employee',
      headers: ['Name', 'Department', 'Role', 'Action'],
      rows: [
        ['John Smith', 'Engineering', 'Developer', 'View'],
        ['Priya Sharma', 'Human Resources', 'Manager', 'View']
      ]
    },

    skills: {
      title: 'Skill profile',
      subtitle: 'Employee: John Smith',
      action: 'Start assessment',
      headers: ['Skill', 'Competency', 'Status'],
      rows: [
        ['Java', '9 / 10', 'Strong'],
        ['Spring Boot', '8 / 10', 'Strong'],
        ['Angular', '6 / 10', 'Gap +3']
      ]
    },

    learning: {
      title: 'Learning management',
      subtitle: 'Keep learning paths and progress moving.',
      action: 'Enroll in course',
      headers: ['Course', 'Level', 'Progress'],
      rows: [
        ['Spring Boot Microservices', 'Advanced', '80%'],
        ['Angular Advanced', 'Advanced', '50%'],
        ['System Design Fundamentals', 'Intermediate', 'Available']
      ]
    },

    certifications: {
      title: 'Certification management',
      subtitle: 'Track validity, renewals and compliance.',
      action: 'Request renewal',
      headers: ['Certification', 'Status', 'Expiry'],
      rows: [
        ['AWS Solutions Architect', 'VALID', '12 Jun 2027'],
        ['Microsoft Azure', 'EXPIRING', '20 Oct 2026']
      ]
    }
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.screen =
      this.route.snapshot.data['screen'] as Screen;
  }

  get view() {
    return this.content[this.screen];
  }

  startAssessment(): void {
    this.router.navigate(['/assessment']);
  }
}
