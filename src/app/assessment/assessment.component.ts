import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Assessment } from '../entities/assessment';
import { AssessmentService } from '../services/assessment.service';

@Component({
  selector: 'app-assessment',
  templateUrl: './assessment.component.html',
  styleUrls: ['./assessment.component.css']
})
export class AssessmentComponent implements OnInit {
  assessments: Assessment[];
  selectedAssessment: Assessment;


  constructor(private router: Router, private assessmentService: AssessmentService) { }

  getAssessments(): void {
    this.assessmentService.getAssessments().subscribe(assessment => this.assessments = assessment);
  }

  takeAssessment(): void {
    this.router.navigate(['/assessments/items', this.assessmentService.getAssessmentById(this.selectedAssessment.Id)]);
  }

  onSelect(assessment: Assessment): void {
    this.selectedAssessment = assessment;
  }

  ngOnInit() {
    this.getAssessments();
  }

}
