/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/naming-convention */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LOCALE_ID } from '@angular/core';
import {
  ACCESS_TOKEN_PROVIDER,
  CiWebsocketModule,
} from '@consult-indochina/websocket';
import {
  accessTokenFactory,
  CiAuthStateService,
} from '@consult-indochina/auth';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    CiWebsocketModule.forRoot(
      {
        ACCESS_TOKEN:
          'GHTK7ruunSWFQNrzPhUEzR4k-uaBXjwS0OES1Jh4BJTrB5cj9Hds-mD_fQPSQ5pfNTAxt0oriBq8Ug2G3aNbdo5NshcW13zjh5vgK1CeVOFUfen83kBFmZ6w93rEzzRHXCz-M1ikyYkcTGFMNcVZsl8YicLBmkimCX1jAhsItWglAP5BYLLPNhzgpovpxF-ckItLG4YXyoZ2jsquJ11Zek1Evz35HXClzHaxTs3BCbP1d0mjKmzQaR0yoak5YfeQUvewV6gz9oLFIfQCbw2u1LNpQEDX6S7pN_ZdaY2QklzWLv3MY38M-ytRvVGu6T-8QH8E-GF1QrpBh-9BZEW58Ain6X1FEgKkf2k3khNWPNwo-J43DAZ5_GKE3PjAIfxHmNTcy2MqJHRnyKM4KGN77PuyS5WJJuBDrMcd1B3WDkjSzEDtYobHE9I8Tv41lK4Vs6xhdwzYAL5cn45hvX1cv76SUpGZdPN2RKDyryOcBhSYgLcfqULjG_EORix_YJ18hezVCNCBXY29J000vfDOP7d9In3cx7klGGMPdhI6C_nf0EqyPBLFEWC3pX0-ecytdmEjG9GfQM7OxU2noZBRhQlGLIAFZmpXNCfAVdVmMsY',
        RECONNECT_INTERVAL: 5000,
        WS_ENDPOINT:
          'wss://7o5p7mfv40.execute-api.ap-southeast-1.amazonaws.com/production',
      },
      {
        provide: ACCESS_TOKEN_PROVIDER,
        useFactory: () => {},
      }
    ),
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: LOCALE_ID, useValue: 'vi_VN' },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
