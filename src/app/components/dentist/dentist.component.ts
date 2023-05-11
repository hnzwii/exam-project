import { Component, Input } from "@angular/core";
import { IDentist } from "src/app/shared/dentist";

@Component({
  selector: "app-dentist",
  templateUrl: "./dentist.component.html",
  styleUrls: ["./dentist.component.scss"],
})
export class DentistComponent {
  @Input() dentist!: IDentist;
}
