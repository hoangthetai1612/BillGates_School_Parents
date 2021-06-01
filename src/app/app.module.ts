/* eslint-disable prefer-arrow/prefer-arrow-functions */
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/naming-convention */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy, IonNav } from '@ionic/angular';
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
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { APIInterceptor } from './base/util/interceptors/api.interceptor';
import { AuthGuard } from './base/util/guards/auth.guard';
import { DatePipe, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AuthInterceptor } from './base/util/interceptors/auth.interceptor';

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
        RECONNECT_INTERVAL: 20000,
        WS_ENDPOINT:
          'wss://7o5p7mfv40.execute-api.ap-southeast-1.amazonaws.com/production',
      },
      {
        provide: ACCESS_TOKEN_PROVIDER,
        useFactory: () => { },
      }
    ),
  ],
  providers: [
    AuthGuard,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    {
      provide: DatePipe
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: APIInterceptor,
      multi: true,
    },
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    },
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: AuthInterceptor,
    //   multi: true,
    // },
    IonNav,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
