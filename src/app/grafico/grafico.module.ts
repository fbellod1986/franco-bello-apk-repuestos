import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GraficoRoutingModule } from './grafico-routing.module';
import { GraficoComponent } from './grafico.component';
import { IonicModule } from '@ionic/angular';
import { NgChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [GraficoComponent],
  imports: [
    CommonModule,
    IonicModule,
    GraficoRoutingModule,
    NgChartsModule
  ]
})
export class GraficoModule { }
