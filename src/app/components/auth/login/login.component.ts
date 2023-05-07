import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent {
  // username!: string;
  email!: string;
  password!: string;

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    if (this.email && this.password) {
      const user = {
        email: this.email,
        password: this.password,
      };

      this.authService
        .signIn(user)
        .then((res) => {
          console.log(res);
          localStorage.setItem("User", JSON.stringify(res.user));
          this.authService.setUser();
          this.router.navigate(["/"]);
        })
        .catch((err) => console.log(err));

      // window.location.reload();
      // this.router.navigate(["/"]);
    } else {
      console.log("Enter username, email, password");
    }
  }
}
