import { Injectable } from '@angular/core';

export interface Alumnos {
  id: number;
  name: string;
  edad: number;
  img: string,
  descripcion: string;
  destacado: boolean,
  audio: string,
  reproduccion: boolean
}

@Injectable({
  providedIn: 'root'
})
export class ListadoService {

  constructor() { }

  public alumnos: Alumnos[] = [
    { id: 0,
      name: 'Francisca Godoy',
      edad: 18,
      img: 'assets/fotos/perfil/1.png',
      descripcion: 'Alumna destacada 1',
      destacado: true,
      audio: 'assets/audio/house.mp3',
      reproduccion: false
    },
    { id: 1,
      name: 'Eduardo Garcia',
      edad: 17,
      img: 'assets/fotos/perfil/2.png',
      descripcion: 'Alumno 2',
      destacado: false,
      audio: '',
      reproduccion: false
    },
    { id: 2,
      name: 'Pedro Garcia',
      edad: 16,
      img: 'assets/fotos/perfil/3.png',
      descripcion: 'Alumno 3',
      destacado: false,
      audio: '',
      reproduccion: false
    },
    { id: 3,
      name: 'Francisco Perez',
      edad: 15,
      img: 'assets/fotos/perfil/4.png',
      descripcion: 'Alumno 4',
      destacado: false,
      audio: '',
      reproduccion: false
    },
    { id: 4,
      name: 'Carlos Sanhueza',
      edad: 16,
      img: 'assets/fotos/perfil/5.png',
      descripcion: 'Alumno 5',
      destacado: false,
      audio: '',
      reproduccion: false
    },
    { id: 5,
      name: 'Juan Perez',
      edad: 17,
      img: 'assets/fotos/perfil/6.png',
      descripcion: 'Alumno 6',
      destacado: false,
      audio: '',
      reproduccion: false
    },
  ];

  public getAlumnos(): Alumnos[] {
    return this.alumnos;
  }

}
