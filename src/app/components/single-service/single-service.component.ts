import { Component, OnInit } from "@angular/core";
import { Database, onValue, ref } from "@angular/fire/database";
import { ActivatedRoute } from "@angular/router";
import { IService } from "src/app/shared/service";

@Component({
  selector: "app-single-service",
  templateUrl: "./single-service.component.html",
  styleUrls: ["./single-service.component.scss"],
})
export class SingleServiceComponent implements OnInit {
  serviceId!: number;
  service: IService | undefined;
  constructor(private actRoute: ActivatedRoute, private database: Database) {
    this.serviceId = this.actRoute.snapshot.params["id"];

    console.log(this.serviceId);
  }
  ngOnInit(): void {
    const servicesRef = ref(this.database, `services/${this.serviceId - 1}`);
    console.log(this.database, servicesRef);
    onValue(servicesRef, (snapshot) => {
      const data = snapshot.val();
      this.service = data;
      console.log(this.service);
    });
  }
}
