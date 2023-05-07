import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"],
})
export class RegisterComponent {
  // username!: string;
  email!: string;
  password!: string;

  constructor(private authService: AuthService, private router: Router) {}

  register() {
    if (this.email && this.password) {
      const user = {
        email: this.email,
        password: this.password,
      };

      this.authService.register(user).then((res) => {
        localStorage.setItem("User", JSON.stringify(res.user));
        this.router.navigate(["/"]);

        // window.location.reload();
      });
    } else {
      console.log("Enter username, email, password");
    }
  }
}
