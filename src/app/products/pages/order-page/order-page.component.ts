import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Color, Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'app-order',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.less']
})
export class OrderPageComponent implements OnInit{
  public sampleTest = "sAmPle";
  public isUpperCase = false;
  public heroes: Hero[] = [];
  public sortByProperty: keyof Hero = "name";
  public orderBy: "asc"| "desc" = "asc";


  ngOnInit(): void {
    this.heroes = [
      {
        name: "Hero 1",
        color: Color.black,
        canFly: true
      },
      {
        name: "Hero 2",
        color: Color.black,
        canFly: true
      },
      {
        name: "Hero 3",
        color: Color.blue,
        canFly: false
      },
      {
        name: "Hero 4",
        color: Color.red,
        canFly: true
      },
  ]
  }

  public toggleUpperCase(): void{
    this.isUpperCase = !this.isUpperCase
  }

  public changeSort(property: keyof Hero = "name") {
    this.sortByProperty = property
    this.orderBy = this.orderBy === "desc" ? "asc" : "desc";
  }
}
