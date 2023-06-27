/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './@core/core.module';
import { ThemeModule } from './@theme/theme.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment.prod';
import { PrintBarcodeComponent } from './pages/print-barcode/print-barcode.component';
import { NgxBarcodeModule } from 'ngx-barcode';
import { NbButtonModule } from '@nebular/theme';
import { AuthModule } from './Modules/auth/auth.module';




import {
  NbChatModule,
  NbDatepickerModule,
  NbDialogModule,
  NbMenuModule,
  NbSidebarModule,
  NbToastrModule,
  NbWindowModule,

} from '@nebular/theme';
import { AngularFireMessagingModule } from '@angular/fire/messaging';
import { MessagingService } from './Services/messaging.service';

@NgModule({
  declarations: [AppComponent, PrintBarcodeComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgxBarcodeModule,
    NbButtonModule,
    AppRoutingModule,
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbDatepickerModule.forRoot(),
    NbDialogModule.forRoot(),
    NbWindowModule.forRoot(),
    NbToastrModule.forRoot(),
    AngularFireMessagingModule,
    NbChatModule.forRoot({
      messageGoogleMapKey: 'AIzaSyA_wNuCzia92MAmdLRzmqitRGvCF7wCZPY',
    }),
    CoreModule.forRoot(),
    ThemeModule.forRoot(),
    AuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),

  ],
  providers : [MessagingService],
  bootstrap: [AppComponent],
})
export class AppModule {
}
