import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { IUser } from "../shared/user";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  user!: IUser;

  constructor(private auth: AngularFireAuth) {
    this.setUser();
  }

  setUser() {
    const item = localStorage.getItem("User");
    this.user = item ? JSON.parse(item) : null;
    console.log(this.user);
  }

  signIn(user: IUser) {
    return this.auth.signInWithEmailAndPassword(user.email, user.password);
  }

  register(user: IUser) {
    return this.auth.createUserWithEmailAndPassword(user.email, user.password);
  }
}
