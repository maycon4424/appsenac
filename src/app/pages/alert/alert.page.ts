import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  constructor(private alertControl: AlertController) { }

  ngOnInit() {
  }
  async click() {
    const alert = await this.alertControl.create({
      header: 'Alert Mobile',
      subHeader: 'Exemplo',
      message: 'Exemplo de Alert!!!',
      buttons: [
                {text: 'OK',
                 handler: () => {
                   console.log('O botão OK foi pressionado!');
                 }
                },
                {text: 'Cancelar',
                 handler: () => {
                   console.log('O botão cancelar foi pressionado');
                 } 
              }
           ]
    })
    alert.present();
   }
}
