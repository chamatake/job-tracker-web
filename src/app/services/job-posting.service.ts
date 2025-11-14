import { Injectable } from '@angular/core';
import { ApiBaseService } from './api-base.service';
import { JobPosting } from '../models/job-posting.model';
import { Observable } from 'rxjs';
import { KeyValuePair } from '../core/key-value-pair';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JobPostingService extends ApiBaseService {
  private baseUrl: string = '/api/job-postings';

  public create(request: Partial<JobPosting>): Observable<JobPosting> {
    return this.http.post<JobPosting>(this.baseUrl, request);
  }

  public findAll(): Observable<JobPosting[]> {
    return this.http.get<JobPosting[]>(this.baseUrl);
  }

  public findAllByCompanyName(companyName: string): Observable<JobPosting[]> {
    let params: HttpParams = this.withUrlParams([
      new KeyValuePair<string, string>('companyName', companyName)
    ]);

    return this.http.get<JobPosting[]>(`${this.baseUrl}/company`, { params });
  }

  public findById(id: string): Observable<JobPosting> {
    return this.http.get<JobPosting>(`${this.baseUrl}/${id}`);
  }
}
