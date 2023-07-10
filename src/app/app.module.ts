import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { SwiperModule } from 'swiper/angular';
import { NgImageSliderModule } from 'ng-image-slider';
import { ClipboardModule } from 'ngx-clipboard';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { AlertComponent } from './share/alert/alert.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import { DialogComponent } from './share/dialog/dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AlertComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SwiperModule,
    NgImageSliderModule,
    ClipboardModule,
    MatSnackBarModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
