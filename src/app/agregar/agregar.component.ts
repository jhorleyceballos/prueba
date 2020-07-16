import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Perro } from '../models/perro';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css'],
})
export class AgregarComponent implements OnInit {
  public nombre: string;
  public nombre_raza:string;
  public fecha_nacimiento: any;

  constructor(
    private rutaActiva: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.nombre_raza = this.rutaActiva.snapshot.params.raza;
  }

  guardarLocal() {
    let registro=[{nombre:this.nombre,fecha_nacimiento:this.fecha_nacimiento}];
    localStorage.setItem(this.nombre_raza, JSON.stringify(registro));
    this.nombre='';
    this.fecha_nacimiento='';
    location.href="/"
  }
}
