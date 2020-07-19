import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Perro } from '../models/perro';
import { PerroService } from '../services/perro.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css'],
  providers: [PerroService],
})
export class ListarComponent implements OnInit {
  public perro: Perro;
  public nombre_raza: string;
  public perros_registrados = [];
  public cargando:boolean = true;

  constructor(
    private rutaActiva: ActivatedRoute,
    private _perroService: PerroService
  ) {}

  ngOnInit(): void {
    this.perro={index:null,nombre:'',fecha_nacimiento:null};
    this.nombre_raza = this.rutaActiva.snapshot.params.raza;
    this.perros_registrados = this._perroService.getRazasLocal(this.nombre_raza);
    this.cargando=false;
  }

  onModalEdit(item) {
    this.perro = item;
  }

  updatePerro() {
    this.perros_registrados.forEach((element, index) => {
      if (index == this.perro.index) {
        this._perroService.updateLocal(this.nombre_raza,index, this.perro);
        this.perros_registrados = this._perroService.getRazasLocal(this.nombre_raza)
      }
    });
  }

  onModalDelete(item) {
    this.perro = item;
  }

  deletePerro(){
    this.perros_registrados.forEach((element, index) => {
      if (index == this.perro.index) {
        this._perroService.deleteLocal(this.nombre_raza, index);
        this.perros_registrados = this._perroService.getRazasLocal( this.nombre_raza);
      }
    });
  }
}
