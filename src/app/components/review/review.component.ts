import { Component, Input } from "@angular/core";
import { IReview } from "src/app/shared/review";

@Component({
  selector: "app-review",
  templateUrl: "./review.component.html",
  styleUrls: ["./review.component.scss"],
})
export class ReviewComponent {
  @Input() review!: IReview;
}
