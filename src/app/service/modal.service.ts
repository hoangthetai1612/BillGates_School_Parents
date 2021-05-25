import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalOptions } from '@ionic/core';
@Injectable({
  providedIn: 'root',
})
export class ModalService {
  constructor(private modalController: ModalController) {}

  async presentModal(config: ModalOptions) {
    const modal = await this.modalController.create(config);
    await modal.present();
    return modal;
  }

  async closeModal(data?) {
    await this.modalController.dismiss(data);
  }

  async getTopModal() {
    return await this.modalController.getTop();
  }
}
