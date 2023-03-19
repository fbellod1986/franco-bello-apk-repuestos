import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { DataService, Repuestos } from './services/data.service';

@Component({
  selector: 'app-repuestos',
  templateUrl: './repuestos.page.html',
  styleUrls: ['./repuestos.page.scss'],
})
export class RepuestosPage implements OnInit {

  repuestos!: Repuestos[];

  constructor(private readonly dataService: DataService, private toastController: ToastController) { }

  ngOnInit() {
    this.getRepuestos();
  }

  async notificacionPush(position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toastController.create({
      message: `Repuestos devueltos satisfactoriamente`,
      duration: 1500,
      position: position,
      icon: 'notifications',
      buttons: [
        {
          text: 'Descartar',
          role: 'cancel'
        }
      ],
      color: 'tertiary'
    });

    await toast.present();
  }

  getRepuestos() {

    this.repuestos =  this.dataService.getRepuestos();

    setInterval(() => {
      this.notificacionPush('top');
    }, 15000);

  }

}
