import { Component, OnInit } from "@angular/core";
import { MenuItem } from "primeng/api";

@Component({
  selector: "shared-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.less"]
})
export class MenuComponent implements OnInit {

  public items: MenuItem[] = []

  ngOnInit() {
    this.items = [
        {
            label: "Angular Pipes",
            icon: "pi pi-desktop",
            items:[
              {
                label: "Text & Dates",
                icon: "pi pi-align-left",
                routerLink: "/"
              },
              {
                label: "Numbers",
                icon: "pi pi-dollar",
                routerLink: "number"
              },
              {
                label: "No Commons",
                icon: "pi pi-globe",
                routerLink: "uncommon"
              },
            ]
        },
        {
          label: "Personalized Pipes",
          icon: "pi pi-cog",
          items:[
            {
              label: "Order pipe",
              icon: "pi pi-cog",
              routerLink: "custom/order"
            },
          ]
        }
    ];
}
}
