import { Component, OnInit } from "@angular/core";
import { Database, onValue, ref } from "@angular/fire/database";
import { DentalService } from "src/app/services/dental.service";
import { IDentist } from "src/app/shared/dentist";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.scss"],
})
export class AboutComponent implements OnInit {
  dentists!: IDentist[];
  limit: number = 2;
  show: boolean = true;

  constructor(private database: Database) {}

  ngOnInit(): void {
    const starCountRef = ref(this.database, `dentists/`);
    console.log(this.database, starCountRef);
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      console.log(this.database, data);
      this.dentists = data;
      console.log(this.dentists);
    });
  }

  showMore() {
    this.limit = this.dentists.length;
    this.show = false;
  }

  showLess() {
    this.limit = 2;
    this.show = true;
  }
}
