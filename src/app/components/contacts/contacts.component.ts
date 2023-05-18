import { Component, OnChanges, OnInit, SimpleChanges } from "@angular/core";
import { Database, onValue, ref } from "@angular/fire/database";
import { FormControl, FormGroup } from "@angular/forms";
import { IDentist } from "src/app/shared/dentist";
import { IService, Types } from "src/app/shared/service";

@Component({
  selector: "app-contacts",
  templateUrl: "./contacts.component.html",
  styleUrls: ["./contacts.component.scss"],
})
export class ContactsComponent implements OnInit {
  dentists!: IDentist[];
  services!: IService[];
  servicesTypes: Types[] | undefined;
  serviceType!: Types;
  service!: IService;
  total: number = 0;

  contactForm = new FormGroup({
    fullname: new FormControl(""),
    phone: new FormControl(""),
    dentist: new FormControl(""),
    service: new FormControl(),
    serviceType: new FormControl(),
    date: new FormControl(""),
  });

  constructor(private database: Database) {}
  getTypes(): void {
    // console.log(this.service);

    const servicesRef = ref(
      this.database,
      `services/${this.contactForm.value.service?.id - 1}`
    );
    console.log(this.contactForm.value.service?.id - 1);

    console.log(this.database, servicesRef);
    onValue(servicesRef, (snapshot) => {
      const data = snapshot.val();
      console.log(data);
      this.servicesTypes = data.types;
      console.log(this.servicesTypes);
    });
  }

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

  getTotalPrice() {
    console.log(this.contactForm.value.serviceType.price);
    this.total = this.contactForm.value.serviceType.price;
  }

  send() {
    console.log(this.contactForm.value);
  }
}
