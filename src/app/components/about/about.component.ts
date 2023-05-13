import { Component, OnInit } from "@angular/core";
import { Database, onValue, ref } from "@angular/fire/database";
import { DentalService } from "src/app/services/dental.service";
import { IDentist } from "src/app/shared/dentist";
import { IReview } from "src/app/shared/review";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.scss"],
})
export class AboutComponent implements OnInit {
  dentists!: IDentist[];
  limit: number = 2;
  show: boolean = true;
  reviews!: IReview[];

  page = 1;
  count = 0;
  pageSize = 4;
  pageSizes = [3, 6, 9];

  handlePageChange(event: number): void {
    this.page = event;
  }

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

    const reviewsRef = ref(this.database, `reviews/`);
    console.log(this.database, reviewsRef);
    onValue(reviewsRef, (snapshot) => {
      const data = snapshot.val();
      console.log(this.database, data);

      const mapped = Object.keys(data).map((key) => ({
        email: data[key].email,
        message: data[key].message,
      }));
      this.reviews = mapped;
      console.log(this.reviews);
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
