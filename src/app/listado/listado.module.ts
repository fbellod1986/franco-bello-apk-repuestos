import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { ListadoRoutingModule } from './listado-routing.module';
import { ListadoComponent } from './listado.component';


@NgModule({
  declarations: [ListadoComponent],
  imports: [
    CommonModule,
    IonicModule,
    ListadoRoutingModule
  ]
})
export class ListadoModule { }
