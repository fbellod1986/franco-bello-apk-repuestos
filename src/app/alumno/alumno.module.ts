import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlumnoComponent } from './alumno.component';
import { IonicModule } from '@ionic/angular';
import { AlumnoPageRoutingModule } from './alumno-routing.module';



@NgModule({
  declarations: [AlumnoComponent],
  imports: [
    CommonModule,
    IonicModule,
    AlumnoPageRoutingModule
  ]
})
export class AlumnoModule { }
