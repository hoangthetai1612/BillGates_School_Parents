/* eslint-disable @typescript-eslint/naming-convention */
import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { IonicModule, ModalController } from '@ionic/angular';
import { BaseButtonModule } from 'src/app/base/base-button/base-button.component';
import { AccountService } from 'src/app/service/account.service';
import { AuthStoreService } from 'src/app/service/auth.store';

@Component({
  selector: 'app-input-confirm',
  templateUrl: './input-confirm.component.html',
  styleUrls: ['./input-confirm.component.scss'],
})
export class InputConfirmComponent implements OnInit {
  buttonStyle = {
    width: '311px',
    cssClass: 'buttonDarkOrange',
    text: 'Xác nhận',
  };
  formChangePassword = new FormGroup({
    OldPassword: new FormControl(''),
    NewPassword: new FormControl(''),
    ConfirmPassword: new FormControl(''),
    UserName: new FormControl(''),
  });
  constructor(
    // private nav: IonNav,
    private modalController: ModalController,
    private accountService: AccountService,
    private authStoreService: AuthStoreService
  ) {}

  ngOnInit() {
    this.authStoreService.userName$.subscribe((res) => {
      this.formChangePassword.get('UserName').setValue(res);
    });
  }
  async closeModal(data?) {
    await this.modalController.dismiss(data);
  }
  // backToStep() {
  //   this.nav.pop()
  // }
  // openConfirm() {
  //   this.nav.push(InputSuccessComponent, {
  //   })
  // }

  confirmPass() {
    this.accountService.create(this.formChangePassword.value).subscribe(
      (res) => {
        console.log(res);
        this.closeModal();
      },
      (err) => {
        console.log(err.error.Message);
      }
    );
  }
}
@NgModule({
  declarations: [InputConfirmComponent],
  imports: [
    CommonModule,
    IonicModule,
    BaseButtonModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [InputConfirmComponent],
})
export class InputConfirmModule {}
