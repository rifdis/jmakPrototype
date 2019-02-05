import { Injectable } from '@angular/core';
import {Assessment} from '../entities/assessment';
import {Item} from '../entities/item';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError as observableThrowError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { AssessmentService } from './assessment.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class ItemsService {
  private assessmentItemsURL = 'api/items';

  getAssessmentItems(): Observable<Item[]> {
    console.log(this.http.get<Item[]>(this.assessmentItemsURL).pipe(map(data => data)));
    return this.http.get<Item[]>(this.assessmentItemsURL).pipe(map(data => data));
  }

  constructor(private http: HttpClient) { }
}
