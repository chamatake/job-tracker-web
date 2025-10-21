import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Company } from '../models/company.model';
import { ApiBaseService } from './api-base.service';
import { KeyValuePair } from '../core/key-value-pair';

@Injectable({
  providedIn: 'root'
})
export class CompanyService extends ApiBaseService{
  private baseUrl: string = '/api/companies';

  public create(request: Partial<Company>): Observable<Company> {
    return this.http.post<Company>(this.baseUrl, request);
  }

  public findAll(): Observable<Company[]> {
    return this.http.get<Company[]>(this.baseUrl);
  }

  public findByCompanyName(name: string): Observable<Company> {
    let params: HttpParams = this.withUrlParams([
      new KeyValuePair<string, string>('companyName', name)
    ]);

    return this.http.get<Company>(this.baseUrl, { params });
  }

  public findById(id: string): Observable<Company> {
    return this.http.get<Company>(`${this.baseUrl}/${id}`);
  }
}
