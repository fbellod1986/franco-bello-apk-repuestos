import { Injectable } from '@angular/core';

export interface Repuestos {
  id: number;
  nombre: string;
  precio: string;
  img: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public repuestos: Repuestos[] = [
    { id: 0,
      nombre: 'Repuesto 1',
      precio: '$2.300',
      img: 'assets/fotos/herramientas/repuesto-1.png',
    },
    { id: 1,
      nombre: 'Repuesto 2',
      precio: '$4.300',
      img: 'assets/fotos/herramientas/repuesto-2.png',
    },
    { id: 2,
      nombre: 'Repuesto 3',
      precio: '$54.300',
      img: 'assets/fotos/herramientas/repuesto-3.png',
    },
    { id: 3,
      nombre: 'Repuesto 4',
      precio: '$34.300',
      img: 'assets/fotos/herramientas/repuesto-4.png',
    }
  ];

  constructor() { }

  public getRepuestos(): Repuestos[] {
    return this.repuestos;
  }

  public getRepuestosById(id: number): Repuestos {
    return this.repuestos[id];
  }
}
