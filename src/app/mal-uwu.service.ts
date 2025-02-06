import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class malUwuService {
  private urlCategorias = 'https://api.chucknorris.io/jokes/categories';
  private urlBromaAleatoria = 'https://api.chucknorris.io/jokes/random';

  constructor(private http: HttpClient) {}

  getCategoriasBromas(): Observable<any> {
    return this.http.get(this.urlCategorias);
  }

  getBromaAleatoria(): Observable<any> {
    return this.http.get(this.urlBromaAleatoria);
  }
}
