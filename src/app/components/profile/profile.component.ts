import { Component } from "@angular/core";
import { Database, ref, set } from "@angular/fire/database";
import { AuthService } from "src/app/services/auth.service";
import { DentalService } from "src/app/services/dental.service";
import { IUser } from "src/app/shared/user";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"],
})
export class ProfileComponent {
  user!: IUser;
  review: string | undefined;

  constructor(
    private authService: AuthService,
    private dentalService: DentalService,
    private database: Database
  ) {
    this.user = authService.user;
    console.log(this.user);
  }

  logout() {
    localStorage.removeItem("User");
    window.location.reload();
  }

  sendReview() {
    console.log(this.review);
    const review = {
      email: this.authService.user.email,
      review: this.review,
    };

    const id = new Date().getTime();
    console.log(id);

    set(ref(this.database, `reviews/${id}`), {
      ...review,
    });

    this.review = "";
  }
}
