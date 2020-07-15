import { Injectable } from '@angular/core';
import { Observable} from 'rxjs/Observable';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { GLOBAL } from './global';
import { Perro } from '../models/perro';

@Injectable()
export class PerroService {
  public url: string;

  constructor(public _http: HttpClient) {
    this.url = GLOBAL.url;
  }

  getRazas(): Observable<any> {
    return this._http.get(this.url + 'breeds/list/all');
  }

  getImg(nombre_raza): Observable<any> {
    return this._http.get(this.url + 'breed/' + nombre_raza + '/images/random');
  }
}