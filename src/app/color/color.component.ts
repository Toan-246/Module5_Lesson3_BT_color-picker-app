import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
  red = 123;
  green = 123;
  blue = 123;
  hex = '0x';

  rgbToHex(r, g, b) {
    function toHex(a) {
      if (a <= 0) {
        return '00';
      } else if (a >= 255) {
        return 'FF';
      } else {
        return a.toString(16).toUpperCase();
      }
    }

    return toHex(r) + toHex(g) + toHex(b);
  }

  changeColor(){
    this.hex = this.rgbToHex(this.red, this.green, this.blue);
  }
  constructor() { }

  ngOnInit() {
  }

}
