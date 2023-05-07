import { Component, Output, Input } from "@angular/core";
import { IDentist } from "src/app/shared/dentist";

@Component({
  selector: "app-dentist-card",
  templateUrl: "./dentist-card.component.html",
  styleUrls: ["./dentist-card.component.scss"],
})
export class DentistCardComponent {
  @Input() dentist!: IDentist;
}
