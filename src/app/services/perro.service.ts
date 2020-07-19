import { Injectable } from '@angular/core';
import { Observable} from 'rxjs/Observable';
import * as moment from 'moment';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { GLOBAL } from './global';

@Injectable()
export class PerroService {
  public url: string;

  constructor(public _http: HttpClient) {
    this.url = GLOBAL.url;
  }

  getRazas(): Observable<any> {
    return this._http.get(this.url + 'breeds/list/all');
  }

  getRazasLocal(raza) {
    let perros_registrados= JSON.parse(localStorage.getItem(raza));
    if (!perros_registrados) {
      perros_registrados = [];
    }else{
      perros_registrados.forEach((element,index) => {
          element.index=index;
          let nacimiento = moment(element.fecha_nacimiento);
          let hoy = moment('2020-07-17');
          element.edad = hoy.diff(nacimiento, 'days');
      })
    }
    return perros_registrados;
  }

  updateLocal(raza,index, data) {
    let razaLocal = this.getRazasLocal(raza);
    razaLocal[index].nombre = data.nombre;
    razaLocal[index].fecha_nacimiento = data.fecha_nacimiento;
    localStorage.setItem(raza, JSON.stringify(razaLocal));
  }

  deleteLocal(raza, index) {
    let razaLocal = this.getRazasLocal(raza);
    razaLocal.forEach((element,idx)=>{
      if(idx==index){
        razaLocal.splice(index,1);
      }
    })
    localStorage.setItem(raza,JSON.stringify(razaLocal));
  }

  getImg(nombre_raza): Observable<any> {
    return this._http.get(this.url + 'breed/' + nombre_raza + '/images/random');
  }
}