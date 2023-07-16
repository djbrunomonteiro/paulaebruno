import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, of } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  BASE_URL = 'assets/convidados.json';

  mapaAcentos: any = {
    'á': 'a', 'à': 'a', 'ã': 'a', 'â': 'a', 'ä': 'a',
    'é': 'e', 'è': 'e', 'ê': 'e', 'ë': 'e',
    'í': 'i', 'ì': 'i', 'î': 'i', 'ï': 'i',
    'ó': 'o', 'ò': 'o', 'õ': 'o', 'ô': 'o', 'ö': 'o',
    'ú': 'u', 'ù': 'u', 'û': 'u', 'ü': 'u',
    'ç': 'c',
  };

  constructor(private http: HttpClient) { }

  getOne(nomes: any) {
    return this.http.get(`${this.BASE_URL}`).pipe(
      map((res: any) => {
        if (res?.results) {
          const convidados = res?.results as any[];
          const convidado = convidados.filter(elem => this.validarNomes(elem.nomes, nomes))[0]
          return convidado
        } else {
          return res
        }

      }),
      catchError((err: any) => of(err?.error))
    );
  }



  editOne(id: any, data: any) {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    return this.http.patch(`${this.BASE_URL}/${id}`, data).pipe(
      map(res => res),
      catchError((err: any) => of(err?.error))
    );
  }

  gerarLInks(){
    return this.http.get(`${this.BASE_URL}`).pipe(
      map((res: any) => {
        if (res?.results) {
          let convidados = res?.results as any[];
          convidados = convidados.map(elem => {
            return {
              convidados: elem.nomes,
              link: 'https://paulaebruno.site/'+String(elem.nomes).toLowerCase()
              .replace(/[áàãâäéèêëíìîïóòõôöúùûüç]/gi, (letra) => this.mapaAcentos[letra] || letra)
              .replace(/\s/g, '-')
            } 
          });
          return convidados
        } else {
          return res
        }

      }),
      catchError((err: any) => of(err?.error))
    );
  }

  validarNomes(elementA: string, elementB: string){
    return String(elementA).toLowerCase()
    .replace(/[áàãâäéèêëíìîïóòõôöúùûüç]/gi, (letra) => this.mapaAcentos[letra] || letra)
    .replace(/\s/g, '-') === String(elementB)
  }
}
