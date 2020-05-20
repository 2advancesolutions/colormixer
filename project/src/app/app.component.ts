import { Component, OnInit, OnDestroy } from '@angular/core';
import { ColorService } from './services/color.service';
import { Subscription } from 'rxjs';

interface IColor {
  color1: string;
  color2: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit, OnDestroy {
  color1: string;
  color2: string;
  loaded: boolean;
  sub: Subscription;
  constructor(private colorService: ColorService) { }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
  ngOnInit(): void {
    this.sub = this.colorService.getColors()
      .subscribe((data: IColor) => {
        this.color1 = '#' + data.color1;
        this.color2 = '#' + data.color2;
        this.loaded = true;
      });
  }
}
