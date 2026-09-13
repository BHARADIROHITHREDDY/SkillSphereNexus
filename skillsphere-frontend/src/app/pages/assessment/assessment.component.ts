import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-assessment',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './assessment.component.html',
  styleUrl: './assessment.component.scss'
})
export class AssessmentComponent {

  questions = [
    {
      question: 'What is the main purpose of Java?',
      options: [
        'Web browsing',
        'Object-oriented programming',
        'Database management',
        'Operating system management'
      ],
      answer: 'Object-oriented programming'
    },
    {
      question: 'Which framework is used to build Java backend applications?',
      options: [
        'Angular',
        'Spring Boot',
        'React',
        'Bootstrap'
      ],
      answer: 'Spring Boot'
    },
    {
      question: 'Which language is mainly used in Angular?',
      options: [
        'Java',
        'Python',
        'TypeScript',
        'C++'
      ],
      answer: 'TypeScript'
    },
    {
      question: 'What is an API?',
      options: [
        'Application Programming Interface',
        'Application Program Internet',
        'Advanced Programming Interface',
        'Application Process Integration'
      ],
      answer: 'Application Programming Interface'
    },
    {
      question: 'Which HTTP method is normally used to retrieve data?',
      options: [
        'POST',
        'GET',
        'DELETE',
        'PATCH'
      ],
      answer: 'GET'
    }
  ];

  selectedAnswers: string[] = [];
  submitted = false;
  score = 0;

  constructor(private router: Router) {}

  selectAnswer(questionIndex: number, answer: string): void {
    this.selectedAnswers[questionIndex] = answer;
  }

  submitAssessment(): void {
    this.score = 0;

    this.questions.forEach((question, index) => {
      if (this.selectedAnswers[index] === question.answer) {
        this.score++;
      }
    });

    this.submitted = true;
  }

  goBack(): void {
    this.router.navigate(['/skills']);
  }
}
