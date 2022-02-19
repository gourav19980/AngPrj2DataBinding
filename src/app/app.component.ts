import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  demo = "Hi demo";
  title = 'AngPrj2DataBinding';
  src1 = '../favicon.ico';
  wi = 100;
  name: string = "Hi";
  today = new Date();
  billAmount: number = 10000;
  Discount: number = 50;
  

  isDisabled: boolean = true;
  x: number = 100;
  y: number = 200;
  res: number = 0;

  addNos(): number {
    this.res = this.x + this.y;
    return this.res;
  }

  count: number = 0;
  show() {
    this.count++;
    return this.count;
  }

  showNumber(): number{
    return this.x;
  }
}
