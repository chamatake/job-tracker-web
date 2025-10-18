import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Company } from '../models/company.model';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  private http = inject(HttpClient);
  private baseUrl: string = '/api/companies';

  public create(request: Partial<Company>): Observable<Company> {
    return this.http.post<Company>(this.baseUrl, request);
  }

  public findAll(): Observable<Company[]> {
    return this.http.get<Company[]>(this.baseUrl);
  }

  public findByCompanyName(name: string): Observable<Company> {
    let params = new HttpParams();
    params.set('companyName', name);

    return this.http.get<Company>(this.baseUrl, { params });
  }

  public findById(id: string): Observable<Company> {
    return this.http.get<Company>(`${this.baseUrl}/${id}`);
  }
}
