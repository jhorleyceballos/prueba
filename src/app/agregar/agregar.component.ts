import { Component, OnInit } from '@angular/core';
import { Perro } from '../models/perro';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css'],
})
export class AgregarComponent implements OnInit {
  public perro: Perro;
  public nombre: string;
  public fecha_nacimiento: any;

  constructor() {}

  ngOnInit(): void {}

  desarrollando() {
    alert('En desarrollo...');
  }
}
