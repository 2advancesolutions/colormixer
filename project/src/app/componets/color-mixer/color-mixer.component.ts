import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-color-mixer',
  templateUrl: './color-mixer.component.html',
  styleUrls: ['./color-mixer.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ColorMixerComponent implements OnInit {

  @Input() hexColor1: string;
  @Input() hexColor2: string;

  mixColor: string;
  invertedColor: any;

  constructor() { }

  ngOnInit(): void {
    this.mixColor = this.decode(this.hexColor1, this.hexColor2);
    this.invertColor = this.invertColor(this.mixColor);
    this.mixColor = '#' + this.mixColor;
    console.log(this.mixColor);
    console.log(this.invertColor);
  }

  invertColor(hexTripletColor): any {
    let color = hexTripletColor;
    color = color.substring(1); // remove #
    color = parseInt(color, 16); // convert to integer
    color = 0xFFFFFF ^ color; // invert three bytes
    color = color.toString(16); // convert to hex
    color = ('000000' + color).slice(-6); // pad with leading zeros
    color = '#' + color; // prepend #
    return color.toUpperCase();
  }

  decode(hex1, hex2): string {
    hex1 = hex1.substring(1);
    hex2 = hex2.substring(1);
    const splitHEX = color => color.match(/.{1,2}/g);
    const leadingZeor = val => (Number(val) < 10 ? '0' + val : val);
    const convert = val => parseInt(val, 16);
    const color1 = splitHEX(hex1);
    const color2 = splitHEX(hex2);
    return color1.map((component, idx) =>
      leadingZeor(Math.round((convert(component) + convert(color2[idx])) / 2).toString(16)))
      .join('');
  }

}
