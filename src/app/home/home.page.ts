import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
message = "teste";
onToogle!: boolean;
checkOn!: string;
checked: boolean = false;

  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {
  }

  async openModal() {
    const modal = await this.modalCtrl.create({
      component: ModalComponent,
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === "confirm") {
      this.message = "Hello, ${data}!";
    }
  }

  clickToogle(){
    if(this.onToogle = false) {
      this.checkOn = "Desligado"
    } else {
      this.onToogle = true
      this.checkOn = "Ligado"
      this.checked = true
    }
  }


}
