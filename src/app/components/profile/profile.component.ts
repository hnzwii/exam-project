import { Component } from "@angular/core";
import {
  Database,
  equalTo,
  onValue,
  orderByChild,
  orderByKey,
  query,
  ref,
  set,
} from "@angular/fire/database";
import { AuthService } from "src/app/services/auth.service";
import { DentalService } from "src/app/services/dental.service";
import { IAppointment } from "src/app/shared/appointment";
import { IUser } from "src/app/shared/user";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"],
})
export class ProfileComponent {
  user!: IUser;
  review: string | undefined;
  appointments!: IAppointment[];

  constructor(
    private authService: AuthService,
    private dentalService: DentalService,
    private database: Database
  ) {
    this.user = authService.user;
    console.log(this.user);
  }

  ngOnInit(): void {
    const appointmentsRef = query(
      ref(this.database, `appointments/`),
      orderByChild("email"),
      equalTo(this.user.email)
    );
    console.log(this.database, appointmentsRef);
    onValue(appointmentsRef, (snapshot) => {
      const data = snapshot.val();
      console.log(this.database, data);

      const mapped = Object.keys(data).map((key) => ({
        email: data[key].email,
        info: data[key].info,
      }));
      this.appointments = mapped;
      console.log(this.appointments);
    });
  }

  logout() {
    localStorage.removeItem("User");
    window.location.reload();
  }

  sendReview() {
    console.log(this.review);
    const review = {
      email: this.authService.user.email,
      message: this.review,
    };

    const id = new Date().getTime();
    console.log(id);

    set(ref(this.database, `reviews/${id}`), {
      ...review,
    });

    this.review = "";
  }
}
