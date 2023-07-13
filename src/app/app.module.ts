import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { SwiperModule } from 'swiper/angular';
import { NgImageSliderModule } from 'ng-image-slider';
import { ClipboardModule } from 'ngx-clipboard';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { AlertComponent } from './share/alert/alert.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogComponent } from './share/dialog/dialog.component';
import { RemoveAcentuacaoPipe } from './pipes/remove-acentuacao.pipe';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AlertComponent,
    DialogComponent,
    RemoveAcentuacaoPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    SwiperModule,
    NgImageSliderModule,
    ClipboardModule,
    MatSnackBarModule,
    MatDialogModule,
    IonicModule.forRoot()
  ],

  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
