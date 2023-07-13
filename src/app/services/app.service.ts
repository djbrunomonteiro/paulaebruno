import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, of } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  BASE_URL = environment.apiUrl;



  constructor(private http: HttpClient) { }

  getOne(id: any) {
    console.log(`${this.BASE_URL}/${id}`);
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    
    return this.http.get(`${this.BASE_URL}/${id}`, {headers}).pipe(
      map(res => res),
      catchError((err: any) => of (err?.error) )
    );
  }

  editOne(id: any, data: any) {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    return this.http.patch(`${this.BASE_URL}/${id}`, data, {headers}).pipe(
      map(res => res),
      catchError((err: any) => of(err?.error))
    );
  }
}
