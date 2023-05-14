import { Component, OnInit } from "@angular/core";
import { Database, onValue, ref } from "@angular/fire/database";
import { IDentist } from "src/app/shared/dentist";
import { IService } from "src/app/shared/service";

@Component({
  selector: "app-contacts",
  templateUrl: "./contacts.component.html",
  styleUrls: ["./contacts.component.scss"],
})
export class ContactsComponent implements OnInit {
  dentists!: IDentist[];
  services!: IService[];
  total: number = 0;

  constructor(private database: Database) {}

  ngOnInit(): void {
    const dentistRef = ref(this.database, `dentists/`);
    console.log(this.database, dentistRef);
    onValue(dentistRef, (snapshot) => {
      const data = snapshot.val();
      console.log(this.database, data);
      this.dentists = data;
      console.log(this.dentists);
    });

    const servicesRef = ref(this.database, `services/`);
    console.log(this.database, servicesRef);
    onValue(servicesRef, (snapshot) => {
      const data = snapshot.val();
      console.log(this.database, data);
      this.services = data;
      console.log(this.services);
    });
  }
}
