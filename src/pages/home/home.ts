import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListPlaceholderComponent } from '../../components/list-placeholder/list-placeholder';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  switch: boolean = true;
  url= '../../assets/imgs/1.jpg';
  constructor(public navCtrl: NavController) {

  }
  ionViewDidLoad() {
    // this.convertToDataURLviaCanvas('../../assets/imgs/1.jpg', "image/jpeg")
    //   .then(base64Img => {
    //     this.url = base64Img;
    //   })
  }

  convertToDataURLviaCanvas(url, outputFormat) {
    return new Promise((resolve, reject) => {
      let img = new Image();
      img.crossOrigin = 'Anonymous';
      img.onload = function () {
        let canvas = <HTMLCanvasElement>document.createElement('CANVAS'),
          ctx = canvas.getContext('2d'),
          dataURL;
        canvas.height = img.height;
        canvas.width = img.width;
        ctx.drawImage(img, 0, 0);
        dataURL = canvas.toDataURL(outputFormat);
        //callback(dataURL);
        canvas = null;
        resolve(dataURL);
      };
      img.src = url;
    });
  }
}
