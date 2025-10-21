import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { KeyValuePair } from '../core/key-value-pair';

@Injectable({
  providedIn: 'root'
})
export abstract class ApiBaseService {
  http = inject(HttpClient);

  public withUrlParams(pairs: KeyValuePair<string, string>[]): HttpParams {
    let params: HttpParams = new HttpParams();
    pairs.forEach(pair => {
      params.set(pair.getKey(), pair.getValue());
    });

    return params;
  }
}
