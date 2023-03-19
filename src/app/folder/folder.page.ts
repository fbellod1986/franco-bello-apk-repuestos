import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Camera, CameraResultType } from '@capacitor/camera';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder!: string;
  picture?: string;
  indiceSeleccionado: number = 0;

  paginas = [
    /*{
      titulo: 'Alumnos',
      url: '/folder/alumnos',
      icono: 'people'
    },
    {
      titulo: 'Listado',
      url: '/folder/listado',
      icono: 'list'
    },
    {
      titulo: 'Grafico',
      url: '/folder/grafico',
      icono: 'stats-chart'
    },
    {
      titulo: 'Ingreso Plantas',
      url: '/folder/plantas',
      icono: 'enter'
    }
    {
      titulo: 'Indicadores Económicos',
      url: '/folder/indicadores',
      icono: 'enter'
    }*/
    {
      titulo: 'Repuestos',
      url: '/folder/repuestos',
      icono: 'enter'
    }
  ]

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
  }

  cambiarIndiceSeleccionado(i: any){
    this.indiceSeleccionado = i;
  }

  async tomarFoto() {
    const image = await Camera.getPhoto({
      quality: 100,
      allowEditing: false,
      resultType: CameraResultType.DataUrl
    });

    this.picture = image.dataUrl;
  }

}
