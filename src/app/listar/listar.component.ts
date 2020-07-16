import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { PerroService } from '../services/perro.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css'],
  providers: [PerroService],
})

export class ListarComponent implements OnInit {
  public nombre_raza: string;
  public perros_registrados = [];

  constructor(
    private rutaActiva: ActivatedRoute,
    private _perroService: PerroService
  ) {}

  ngOnInit(): void {
    this.nombre_raza = this.rutaActiva.snapshot.params.raza;
    this._perroService.getRazas().subscribe(
      (response) => {
        this.perros_registrados = response.message[this.nombre_raza];
      },
      (error) => {
        console.log('error');
      }
    );
  }

  desarrollando(){
    alert('En desarrollo...')
  }
}
