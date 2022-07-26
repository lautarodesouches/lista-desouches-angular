import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {

  listaAlumnos = [
    {
      nombre: 'juan',
      nota: 8,
    },
    {
      nombre: 'pedro',
      nota: 7,
    },
    {
      nombre: 'mateo',
      nota: 5,
    },
    {
      nombre: 'lucas',
      nota: 9,
    },
    {
      nombre: 'agustin',
      nota: 5,
    }
  ]

  promedio: number = this.listaAlumnos.reduce((acc, curr) => {return acc + curr.nota }, 0) / this.listaAlumnos.length

  constructor() { }

  ngOnInit(): void {
  }

}
