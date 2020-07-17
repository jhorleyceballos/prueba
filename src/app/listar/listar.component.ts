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
  public nombre_pivot: string;
  public perros_registrados = [];
  public cargando:boolean = true;

  constructor(
    private rutaActiva: ActivatedRoute,
    private _perroService: PerroService
  ) {}

  ngOnInit(): void {
    this.perro={nombre:'',fecha_nacimiento:null};
    this.nombre_raza = this.rutaActiva.snapshot.params.raza;
    this.perros_registrados = this._perroService.getRazasLocal(this.nombre_raza);
    if (!this.perros_registrados) {
      this.perros_registrados = [];
    }
    this.cargando=false;
  }

  onModalEdit(item) {
    this.nombre_pivot = item.nombre;
    this.perro.nombre = item.nombre;
    this.perro.fecha_nacimiento = item.fecha_nacimiento;
  }

  updatePerro() {
    this.perros_registrados.forEach((element, index) => {
      if (element.nombre == this.nombre_pivot) {
        this._perroService.updateLocal(this.nombre_raza, index, this.perro);
        this.perros_registrados = this._perroService.getRazasLocal(
          this.nombre_raza
        );
      }
    });
  }

  onModalDelete(item) {
    this.perro.nombre = item.nombre;
  }

  deletePerro(){
    this.perros_registrados.forEach((element, index) => {
      if (element.nombre == this.perro.nombre) {
        this._perroService.deleteLocal(this.nombre_raza, index);
        this.perros_registrados = this._perroService.getRazasLocal( this.nombre_raza);
      }
    });
  }
}
