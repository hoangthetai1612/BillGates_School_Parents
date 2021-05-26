import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
@Injectable({
    providedIn: 'root'
})
export class ToastService {

    constructor(public toastController: ToastController) { }

    async showSuccess(message) {
        const toast = await this.toastController.create({
            message,
            position: 'top',
            color: 'success',
            duration: 1500
        });
        toast.present();
    }

    async showError(message) {
        const toast = await this.toastController.create({
            message,
            position: 'top',
            color: 'danger',
            duration: 1500
        });
        toast.present();
    }

    async showWarning(message) {
        const toast = await this.toastController.create({
            message,
            color: 'warning',
            position: 'top',
            duration: 2000
        });
        toast.present();
    }

    async presentToastWithOptions(header?, message?) {
        const toast = await this.toastController.create({
            header,
            message,
            position: 'top',
            buttons: [
                {
                    side: 'start',
                    icon: 'star',
                    text: 'Favorite',
                    handler: () => {
                        // console.log('Favorite clicked');
                    }
                }, {
                    text: 'Done',
                    role: 'cancel',
                    handler: () => {
                        // console.log('Cancel clicked');
                    }
                }
            ]
        });
        toast.present();
    }

}
