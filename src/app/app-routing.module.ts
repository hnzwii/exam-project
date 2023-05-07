import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MainComponent } from "./components/main/main.component";
import { AuthGuard } from "./shared/auth.guard";

const routes: Routes = [
  { path: "", component: MainComponent },
  {
    path: "auth",
    loadChildren: () =>
      import("./components/auth/auth.module").then((m) => m.AuthModule),
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
