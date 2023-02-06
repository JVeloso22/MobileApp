import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-blinds',
  templateUrl: './blinds.component.html',
  styleUrls: ['./blinds.component.scss'],
})
export class BlindsComponent implements OnInit {

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
