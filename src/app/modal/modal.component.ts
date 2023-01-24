import { Component} from '@angular/core';

import { ModalController } from '@ionic/angular';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {

  name!: string;
  login: boolean = false;
  register: boolean = false;

  constructor(private modalCtrl: ModalController) {}

  ngOnInit(){

  }

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  confirm() {
    return this.modalCtrl.dismiss(this.name, 'confirm');
  }

  clickLogin() {
    this.login = true
  }

  clickRegister() {
    this.register = true
  }
}
