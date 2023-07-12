import { HttpClient } from '@angular/common/http';
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
    return this.http.get(`${this.BASE_URL}/${id}`).pipe(
      map(res => res),
      catchError((err: any) => of(err?.error))
    );
  }

  editOne(id: any, data: any) {
    return this.http.patch(`${this.BASE_URL}/${id}`, data).pipe(
      map(res => res),
      catchError((err: any) => of(err?.error))
    );
  }
}
