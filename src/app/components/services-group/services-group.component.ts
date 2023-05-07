import { Component, Input, OnInit } from "@angular/core";
import { Database, onValue, ref } from "@angular/fire/database";
import { DentalService } from "src/app/services/dental.service";
import { IService } from "src/app/shared/service";

@Component({
  selector: "app-services-group",
  templateUrl: "./services-group.component.html",
  styleUrls: ["./services-group.component.scss"],
})
export class ServicesGroupComponent implements OnInit {
  // @Input() service!: IService;
  services!: IService[];

  constructor(
    private dentalService: DentalService,
    private database: Database
  ) {}

  ngOnInit(): void {
    // this.dentalService.getServices().subscribe((res) => {
    //   this.services = res;
    //   console.log(res);
    // });
    const starCountRef = ref(this.database, `services/`);
    console.log(this.database, starCountRef);
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      console.log(this.database, data);
      this.services = data;
      console.log(this.services);
    });
  }
}
