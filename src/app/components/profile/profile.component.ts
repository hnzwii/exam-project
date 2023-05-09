import { Component } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";
import { IUser } from "src/app/shared/user";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"],
})
export class ProfileComponent {
  user!: IUser;

  constructor(private authService: AuthService) {
    this.user = authService.user;
    console.log(this.user);
  }
}
