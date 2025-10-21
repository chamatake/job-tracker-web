import { Injectable } from '@angular/core';
import { ApiBaseService } from './api-base.service';
import { Interview } from '../models/interview.model';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';
import { KeyValuePair } from '../core/key-value-pair';

@Injectable({
  providedIn: 'root'
})
export class InterviewService extends ApiBaseService {
  private baseUrl: string = '/api/interviews';

  public create(request: Partial<Interview>): Observable<Interview> {
    return this.http.post<Interview>(this.baseUrl, request);
  }

  public findAll(): Observable<Interview[]> {
    return this.http.get<Interview[]>(this.baseUrl);
  }

  public findAllByInterviewDate(interviewDate: string): Observable<Interview[]> {
    let params: HttpParams = this.withUrlParams([
      new KeyValuePair<string, string>('interviewDate', interviewDate)
    ]);

    return this.http.get<Interview[]>(this.baseUrl, { params });
  }
}
