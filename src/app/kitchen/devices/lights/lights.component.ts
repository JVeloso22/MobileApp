import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-lights',
  templateUrl: './lights.component.html',
  styleUrls: ['./lights.component.scss'],
})
export class LightsComponent implements OnInit {

  constructor(private toastController: ToastController) { }

  ngOnInit() {}

  activeMessage = "Lights ON"
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

  clickLights() {
    if (this.activeMessage === "Lights ON") {
      this.activeMessage = "Lights OFF"
      this.cheked = true
    } else {
      this.activeMessage = "Lights ON"
      this.cheked = false
    }
  }


}
