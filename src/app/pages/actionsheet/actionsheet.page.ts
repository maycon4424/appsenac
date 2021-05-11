import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-actionsheet',
  templateUrl: './actionsheet.page.html',
  styleUrls: ['./actionsheet.page.scss'],
})
export class ActionsheetPage implements OnInit {

  constructor(private actionSheetControle: ActionSheetController) {}

  ngOnInit() {
  }
 async exibir(){
  const actionSheet = await this.actionSheetControle.create({
    header: 'Fotos',
    buttons: [{
      text:'Apagar',
      icon: 'trash',
      handler: () => {
        console.log('Clicou em Apagar');
      }
    },{
      text: 'Compartilhar',
      icon: 'share',
      handler: () => {
        console.log('Clicou em Compartilhar');
      }
    },{
      text: 'Exibir',
      icon: 'eye',
      handler: () => {
        console.log('Clicou em Exibir');
      }
    }, {
      text: ' Favoritar',
      icon: 'heart',
      handler:() => {
        console.log('Clicou em Favoritar');
      }
    }, {
      text: 'Cancelar',
      icon:'close',
      handler: () => {
        console.log('Clicou em Apagar');
      }
    }
    ]
  })
  actionSheet.present();
  }
}
