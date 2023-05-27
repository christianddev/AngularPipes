import { Component } from '@angular/core';

@Component({
  selector: 'app-basic-page',
  templateUrl: './basic-page.component.html',
  styleUrls: ['./basic-page.component.less']
})
export class BasicPageComponent {

  public customDate: Date = new Date();
}
