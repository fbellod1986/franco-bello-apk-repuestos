import { Component, OnInit } from '@angular/core';
import { ListadoService, Alumnos } from './service/listado.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss'],
})
export class ListadoComponent implements OnInit {

  alumnos?: Alumnos[];
  audio = new Audio();

  constructor(private listadoService: ListadoService) { }

  ngOnInit() {
    this.getAlumnosColegio();
  }

  getAlumnosColegio() {
    this.alumnos = this.listadoService.getAlumnos();
  }

  reproducir(){
    this.listadoService.getAlumnos().map(audioAlumno => {

      
      if (audioAlumno.destacado == true) {

        if (audioAlumno.reproduccion) {
          audioAlumno.reproduccion = false;
          this.pausarAudio(audioAlumno.reproduccion);
          return;
        }

        this.audio = new Audio(audioAlumno.audio);
        this.audio.play();
        audioAlumno.reproduccion = true;
      } 
    }
  );
  }

  pausarAudio(reproduccion: boolean) {
    
    if (reproduccion == false) {
      this.audio.pause();
    }
    
  }

}
