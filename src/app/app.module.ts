/* eslint-disable @typescript-eslint/naming-convention */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LOCALE_ID } from '@angular/core';
import { ACCESS_TOKEN_PROVIDER, CiWebsocketModule } from '@consult-indochina/websocket';
import { accessTokenFactory, CiAuthStateService } from '@consult-indochina/auth';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    CiWebsocketModule.forRoot({
      ACCESS_TOKEN: JSON.parse(localStorage.getItem('access_token') as any)
        .access_token,
      RECONNECT_INTERVAL: 5000,
      WS_ENDPOINT:
        'wss://7o5p7mfv40.execute-api.ap-southeast-1.amazonaws.com/production',
    },
    {
      provide: ACCESS_TOKEN_PROVIDER,
      deps: [CiAuthStateService],
      useFactory: accessTokenFactory,
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
