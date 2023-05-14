import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MainComponent } from "./components/main/main.component";
import { AuthGuard } from "./shared/auth.guard";
import { ProfileGuard } from "./shared/profile.guard";
import { AboutComponent } from "./components/about/about.component";
import { ContactsComponent } from "./components/contacts/contacts.component";

const routes: Routes = [
  { path: "", component: MainComponent },
  {
    path: "auth",
    loadChildren: () =>
      import("./components/auth/auth.module").then((m) => m.AuthModule),
    canActivate: [AuthGuard],
  },
  {
    path: "profile",
    loadChildren: () =>
      import("./components/profile/profile.module").then(
        (m) => m.ProfileModule
      ),
    canActivate: [ProfileGuard],
  },
  { path: "about", component: AboutComponent },
  { path: "contacts", component: ContactsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
