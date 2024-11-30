import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private readonly apiUrl = environment.api;

  constructor(private readonly http: HttpClient) { }

  genericGet<T>(endpoint: string, id?: string): Observable<T>{
    const url = id ? `${this.apiUrl}/${endpoint}/${id}` : `${this.apiUrl}/${endpoint}`;
    return this.http.get<T>(url).pipe(map((res: T) => res));
  }

  genericPost<T>(endpoint: string, data: any, headers: any): Observable<T>{
    const httpOptions = { headers: new HttpHeaders(headers)};
    const url = `${this.apiUrl}/${endpoint}`;
    return this.http.post<T>(url, data, httpOptions).pipe(map((res: T) => res));
  }

  genericPut<T>(endpoint: string, data: any, id?: string): Observable<T>{
    const url = id ? `${this.apiUrl}/${endpoint}/${id}` : `${this.apiUrl}/${endpoint}`;
    return this.http.put<T>(url, data).pipe(map((res: T) => res));
  }

  genericDelete<T>(endpoint: string, id?: string): Observable<T>{
    const url = `${this.apiUrl}/${endpoint}/${id}`;
    return this.http.delete<T>(url).pipe(map((res: T) => res));
  }

  genericGetData<T>(endpoint: string, data?: string, params?: any): Observable<T>{
    const url = `${this.apiUrl}/${endpoint}/filter?categoria=${data}&pagina=${params.pagina}&tamanho=${params.tamanho}`;
    return this.http.get<T>(url).pipe(map((res: T) => res));
  }
}
