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
  public titleModal: string;
  public mostrarModal = false;
  public url_imagen:string;

  constructor(private _perroService: PerroService) {}

  ngOnInit(): void {
    this._perroService.getRazas().subscribe(
      (response) => {
        for (const raza in response.message) {
          let name_raza = raza;
          let total_registros = response.message[raza];
          this.razas.push({ nombre: name_raza, registros: total_registros });
        }
      },
      (error) => {
        console.log('error');
      }
    );
  }

  mostrarImg(nombre_raza) {
    this.titleModal = 'IMAGEN RAZA: ' + nombre_raza;
    this._perroService.getImg(nombre_raza).subscribe(
      (response) => {
        this.url_imagen=response.message;
      },
      (error) => {
        console.log('error');
      }
    );
  }
}
