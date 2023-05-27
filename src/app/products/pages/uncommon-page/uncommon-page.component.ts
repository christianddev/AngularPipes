import { Component } from '@angular/core';
import { interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.less']
})
export class UncommonPageComponent {

  // i18nSelect pipe
  public name: string = "Lola";
  public gender: "male"|"female" = "female";
  public invitationMap = {
    "male": "he",
    "female": "she"
  }

  // i18nPlural pipe
  public clients = ["Maria", "Ron", "Lola", "Marc"]
  public clientsMap = {
    "=0": "We do not have clients waiting",
    "=1": "We have # client waiting",
    "other": "We have # clients waiting"
  }

  // KeyValue pipe
  public person = {
    age: "55",
    name: "Lola",
    address: "Some street, some city"
  }

  // Async pipe
  public myObservableInterval = interval(2000)
  .pipe(
    tap(t => console.log("myObservableInterval", t))
  )

  public myPromise = new Promise((res, rej) => {
    setTimeout(() => {
      console.log("Promise Finished")
      res("Promise Finished")
    }, 5000)
  })


  constructor(){}


  public changeClient(): void {
    this.name = "Ron";
    this.gender = "male";
  }

  public deleteClient(): void {
    this.clients.shift()
  }
}
