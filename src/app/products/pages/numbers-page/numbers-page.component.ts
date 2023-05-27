import { Component } from '@angular/core';

@Component({
  selector: 'app-numbers-page',
  templateUrl: './numbers-page.component.html',
  styleUrls: ['./numbers-page.component.less']
})
export class NumbersPageComponent {
  public decimalNumber = 123456.789;
  public intNumber = 123132123;
  public percentNumber = 0.145;
}
