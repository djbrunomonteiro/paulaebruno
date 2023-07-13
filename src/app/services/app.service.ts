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
    console.log(`${this.BASE_URL}/${id}`);
    
    return this.http.get(`${this.BASE_URL}/${id}`, {headers: {header: 'Access-Control-Allow-Origin'}}).pipe(
      map(res => {
        console.log(res);
        return res
      } ),
      catchError((err: any) => {

        console.log('error', err);
        
        return of(err?.error)

      } )
    );
  }

  editOne(id: any, data: any) {
    return this.http.patch(`${this.BASE_URL}/${id}`, data, {headers: {header: 'Access-Control-Allow-Origin'}}).pipe(
      map(res => res),
      catchError((err: any) => of(err?.error))
    );
  }
}
