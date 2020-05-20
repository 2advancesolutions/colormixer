import { Component, OnInit } from '@angular/core';
import { ColorService } from './services/color.service';

interface IColor {
  color1: string;
  color2: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  color1: string;
  color2: string;
  loaded: boolean;
 constructor(private colorService: ColorService) {}
  ngOnInit(): void {
   this.colorService.getColors().subscribe((data: IColor) => {
     this.color1 = '#' + data.color1;
     this.color2 = '#' + data.color2;
     this.loaded = true;
   });
  }
}
