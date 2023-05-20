import { Component } from "@angular/core";
import {
  Database,
  equalTo,
  onValue,
  orderByChild,
  orderByKey,
  query,
  ref,
  remove,
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
  appointments: IAppointment[] | undefined;

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

      if (data) {
        const mapped = Object.keys(data).map((key) => ({
          email: data[key].email,
          info: data[key].info,
          id: data[key].id,
        }));
        this.appointments = mapped;
        console.log(this.appointments);
      }
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

  deleteAppointment(id: number) {
    console.log(id);

    const appointmentsRef = ref(this.database, `appointments/${id}`);
    remove(appointmentsRef);
  }
}
