import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-fans',
  templateUrl: './fans.component.html',
  styleUrls: ['./fans.component.scss'],
})
export class FansComponent implements OnInit {

  constructor(private toastController: ToastController) { }

  ngOnInit() {}

  activeMessage = "Fans ON"
  cheked: boolean = false

  pinFormatter(value: number) {
    return `${value}%`;
  }

  async presentToast(position: 'bottom') {

    const toast = await this.toastController.create({
      message: this.activeMessage,
      duration: 1500,
      position: position,
    });

    await toast.present();
  }

  clickAir() {
    if (this.activeMessage === "Fans ON") {
      this.activeMessage = "Fans OFF"
      this.cheked = true
    } else {
      this.activeMessage = "Fans ON"
      this.cheked = false
    }
  }

}
