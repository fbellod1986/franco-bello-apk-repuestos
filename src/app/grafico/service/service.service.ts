import { Injectable } from '@angular/core';

export interface Carreras {
  id: number,
  nombre: string;
  alumnos: number;
}

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor() { }

  public carreras: Carreras[] = [
    { 
      id: 0,
      nombre: 'Párvulos',
      alumnos: 65,
    },
    { 
      id: 1,
      nombre: 'Informática',
      alumnos: 24,
    },
    { 
      id: 2,
      nombre: 'Inglés',
      alumnos: 54,
    },
    { 
      id: 3,
      nombre: 'Arquitectura',
      alumnos: 34,
    },
  ];

  public getAlumnos(): Carreras[] {
    return this.carreras;
  }

}
