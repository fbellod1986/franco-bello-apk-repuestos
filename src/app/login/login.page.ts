import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit{

  formularioLogin: FormGroup;

  constructor(public fb: FormBuilder,
    public alertController: AlertController,
    public router: Router) { 

    this.formularioLogin = this.fb.group({
      'nombre': new FormControl("",Validators.required),
      'password': new FormControl("",Validators.required)
    })
  }

  ngOnInit(): void {
    this.seteaValorUsuario();
  }

  seteaValorUsuario() {
    const usuario = ` {"nombre": "admin","password": "admin"} `;
    localStorage.setItem('usuario', usuario);
  }

  async ingresar(){
    const f = this.formularioLogin.value;

    const usuario = JSON.parse(localStorage.getItem('usuario') || '{}');
    console.log("usuario: ", usuario)


    if(usuario.nombre == f.nombre && usuario.password == f.password){
      console.log('Ingresado');
      localStorage.setItem('ingresado','true');
      // this.navCtrl.navigateRoot('folder/alumnos');
      this.router.navigate(['/folder/repuestos']);
    }else{
      const alert = await this.alertController.create({
        header: 'Datos incorrectos',
        message: 'Los datos que ingresaste son incorrectos.',
        buttons: ['Aceptar']
      });
  
      await alert.present();
    }
  }

}
