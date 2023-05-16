import { Component, OnInit } from "@angular/core";
import { Database, onValue, ref } from "@angular/fire/database";
import { OwlOptions } from "ngx-owl-carousel-o";
import { DentalService } from "src/app/services/dental.service";
import { IDentist } from "src/app/shared/dentist";

@Component({
  selector: "app-cards-carousel",
  templateUrl: "./cards-carousel.component.html",
  styleUrls: ["./cards-carousel.component.scss"],
})
export class CardsCarouselComponent implements OnInit {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ["<", ">"],
    responsive: {
      360: {
        items: 1,
      },
      768: {
        items: 2,
      },
      1024: {
        items: 3,
      },
      1280: {
        items: 4,
      },
    },
    nav: true,
  };

  dentists!: IDentist[];

  constructor(
    private dentalService: DentalService,
    private database: Database
  ) {}

  ngOnInit(): void {
    // this.dentalService.getDentists().subscribe((res) => {
    //   this.dentists = res;
    //   console.log(res);
    // });

    const dentistRef = ref(this.database, `dentists/`);
    console.log(this.database, dentistRef);
    onValue(dentistRef, (snapshot) => {
      const data = snapshot.val();
      console.log(this.database, data);
      this.dentists = data;
      console.log(this.dentists);
    });
  }
}
