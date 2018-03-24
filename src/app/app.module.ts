import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';


import { HttpClientModule } from '@angular/common/http';
import { UsersProvider } from '../providers/users/users';

/**
 * Carrega os modulos necessarios para utilizacao do app
 *  
 *
 * @author maycon
 */
@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage    
    //HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UsersProvider
  ]
})
export class AppModule {}
