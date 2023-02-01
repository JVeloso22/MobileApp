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

  async presentToast(position: 'bottom') {
    const toast = await this.toastController.create({
      message: 'Lights ON!',
      duration: 1500,
      position: position
    });

    await toast.present();

  }
}
