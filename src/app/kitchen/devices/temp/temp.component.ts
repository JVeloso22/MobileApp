import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-temp',
  templateUrl: './temp.component.html',
  styleUrls: ['./temp.component.scss'],
})
export class TempComponent implements OnInit {

  constructor(private toastController: ToastController) { }

  ngOnInit() {}

  activeMessage = "Air Conditioning ON"
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
    if (this.activeMessage === "Air Conditioning ON") {
      this.activeMessage = "Air Conditioning OFF"
      this.cheked = true
    } else {
      this.activeMessage = "Air Conditioning ON"
      this.cheked = false
    }
  }
}
