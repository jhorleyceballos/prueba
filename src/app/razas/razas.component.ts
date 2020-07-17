import { Component, OnInit } from '@angular/core';
import {PerroService} from '../services/perro.service';

@Component({
  selector: 'app-razas',
  templateUrl: './razas.component.html',
  styleUrls: ['./razas.component.css'],
  providers: [PerroService],
})
export class RazasComponent implements OnInit {
  public razas = [];
  public url_imagen: string;
  public titleModal: string;
  public cargando: boolean = true;
  public mostrarModal: boolean = false;

  constructor(private _perroService: PerroService) {}

  ngOnInit(): void {
    this._perroService.getRazas().subscribe(
      (response) => {
        for (const raza in response.message) {
          let total_registros = JSON.parse(localStorage.getItem(raza));
          if (!total_registros) {
            total_registros = [];
          }
          this.razas.push({ nombre: raza, registros: total_registros });
        }
        this.cargando = false;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  mostrarImg(nombre_raza) {
    this.titleModal = 'IMAGEN RAZA: ' + nombre_raza;
    this._perroService.getImg(nombre_raza).subscribe(
      (response) => {
        this.url_imagen = response.message;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
