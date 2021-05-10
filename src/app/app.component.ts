import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    {title: 'Home', url: 'home', icon: 'home'},
    { title: 'Botões', url: 'botao', icon: 'tablet-landscape' },
    {title: 'Alerta', url: 'alert', icon:'alert'}
    
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
