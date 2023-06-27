import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NbMenuModule, NbProgressBarModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NbCardModule } from '@nebular/theme';
import { TableModule } from 'ngx-easy-table';
import { NbButtonModule } from '@nebular/theme';
import { NbDialogModule } from '@nebular/theme';
import { NbInputModule } from '@nebular/theme';
import { NgxBarcodeModule } from 'ngx-barcode';
import { AngularFireStorageModule } from "@angular/fire/storage";
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireModule } from '@angular/fire';
import { FormsModule } from '@angular/forms';
import { NbCheckboxModule } from '@nebular/theme';
import { ShowProductsComponent } from './show-products/show-products.component';
import { SearchPipe } from 'app/Pipes/search-pipe.pipe';
import { AngularFireMessagingModule } from '@angular/fire/messaging';
import { MessagingService } from 'app/Services/messaging.service';



@NgModule({
  imports: [
  NbProgressBarModule,
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    NbCardModule,
    TableModule,
    NbButtonModule,
    NbDialogModule.forRoot(),
    NbInputModule,
    NgxBarcodeModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    AngularFireModule,
    FormsModule,
    NbCheckboxModule,
    AngularFireMessagingModule,


  ],
  declarations: [
    PagesComponent,
    DashboardComponent,
    ShowProductsComponent,
    SearchPipe
  ],
  providers: [MessagingService],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class PagesModule {
}
