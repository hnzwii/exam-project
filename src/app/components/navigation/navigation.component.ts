import { Component } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-navigation",
  templateUrl: "./navigation.component.html",
  styleUrls: ["./navigation.component.scss"],
})
export class NavigationComponent {
  isAuth!: boolean;

  constructor(private authService: AuthService) {
    if (authService.user) {
      this.isAuth = true;
    } else {
      this.isAuth = false;
    }
  }
}
