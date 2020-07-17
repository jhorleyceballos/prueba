import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Perro } from '../models/perro';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css'],
})

export class AgregarComponent implements OnInit {
  public perro:Perro;
  public nombre_raza:string;

  constructor(
    private rutaActiva: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.perro={nombre:'',fecha_nacimiento:null};
    this.nombre_raza = this.rutaActiva.snapshot.params.raza;
  }

  guardarLocal() {
    let array_registros:any=[];
    let anteriores=JSON.parse(localStorage.getItem(this.nombre_raza));
    if(anteriores){
      array_registros=anteriores;
    }
    array_registros.push(this.perro);
    localStorage.setItem(this.nombre_raza, JSON.stringify(array_registros));
    this.perro.nombre='';
    this.perro.fecha_nacimiento=null;
    location.href="/"
  }
}
