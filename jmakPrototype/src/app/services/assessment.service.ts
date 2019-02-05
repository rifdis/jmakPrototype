import { Injectable } from '@angular/core';
import {Assessment} from '../entities/assessment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError as observableThrowError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})

export class AssessmentService {
   private assessmentsURL = 'api/assessments';
   private assessmentItemsURL = 'api/assessments/items';

   getAssessments(): Observable<Assessment[]> {
     return this.http.get<Assessment[]>(this.assessmentsURL).pipe(map(data => data));
   }

   getAssessmentById(id: number): Observable<Assessment> {
    const url = '${this.assessmentItemsURL}/${id}';
    return this.http.get<Assessment>(url);
   }

   constructor(private http: HttpClient) { }
}

