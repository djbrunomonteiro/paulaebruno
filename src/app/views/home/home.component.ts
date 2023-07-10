import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ClipboardService } from 'ngx-clipboard';
import { AlertComponent } from 'src/app/share/alert/alert.component';
import { DialogComponent } from 'src/app/share/dialog/dialog.component';
import Swiper from 'swiper';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  slideIndexRef = 0;
  slidesRef: Swiper | undefined;
  sliderAtual = 0;

  imgsWeeding: any[] = [];

  constructor(
    private _clipboardService: ClipboardService,
    private _snackBar: MatSnackBar,
    public dialog: MatDialog
  ){}

  ngOnInit(): void {
    this.proximo();
    this.gerarLinksImgs();
  }

  slideChanged(slides: any) {
    //get index do slide atual
    slides.getActiveIndex().then((index: number) => {
      if (!index) { return; };
      this.slideIndexRef = index;
    });
  }

  getSwiper(swiper: Swiper) {
    if (!swiper) { return; };
    this.slidesRef = swiper;
    this.sliderAtual = this.slidesRef?.realIndex;
  }

  proximo() {
    setTimeout(() => {

      this.slidesRef?.slideNext()

    }, 6000)
  }

  gerarLinksImgs() {
    this.imgsWeeding = [];
    for (let index = 0; index < 39; index++) {
      const elem = {
        image: `assets/imgs/pre-wedding/${index}.jpg`,
        thumbImage: `assets/imgs/pre-wedding/${index}.jpg`,
        alt: '',
        title: `foto-${index}.jpg`
      }

      this.imgsWeeding.push(elem)

    }
  }

  copyPix(){
    this._clipboardService.copy('98970278027');
    this.openSnackBar();
  }

  openSnackBar(){
    this ._snackBar.openFromComponent(AlertComponent, {duration: 2000});
 }

 confirmarPresenca(): void {
  const dialogRef = this.dialog.open(DialogComponent, {
    data: {name: 'this.name', animal: 'this.animal'},
  });

  dialogRef.afterClosed().subscribe(result => {

  });
}

}
