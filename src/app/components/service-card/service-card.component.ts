import { Component, Input, OnInit } from "@angular/core";
import { Database, set, ref, update, onValue } from "@angular/fire/database";
import { Firestore } from "@angular/fire/firestore";
import { IService } from "src/app/shared/service";

@Component({
  selector: "app-service-card",
  templateUrl: "./service-card.component.html",
  styleUrls: ["./service-card.component.scss"],
})
export class ServiceCardComponent implements OnInit {
  @Input() service!: IService;

  ngOnInit(): void {
    console.log(this.service);
  }
}
