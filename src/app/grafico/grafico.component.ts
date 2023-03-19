import { Component, OnInit } from '@angular/core';
import { Chart } from "chart.js";
import { ServiceService, Carreras } from './service/service.service';

@Component({
  selector: 'app-grafico',
  templateUrl: './grafico.component.html',
  styleUrls: ['./grafico.component.scss'],
})
export class GraficoComponent implements OnInit {

  private ctx!: any;
  carreras!: Carreras[];

  constructor(private serviceService: ServiceService) { }

  ngOnInit() {
    this.generaGrafico();
  }

  generaGrafico() {

    this.carreras = this.serviceService.getAlumnos();
    

    const nombreCarreras = this.carreras.map((carrera) => carrera.nombre);
    const cantidadAlumnos = this.carreras.map((carrera) => carrera.alumnos);

    const canvas = document.getElementById('myChart');
    this.ctx = (canvas as HTMLCanvasElement).getContext('2d');

    const myChart = new Chart(this.ctx, {
      type: 'bar',
      data: {
        labels: nombreCarreras,
        datasets: [{
          label: 'Carreras con mas alumnos',
          data: cantidadAlumnos,
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });

  }

}
