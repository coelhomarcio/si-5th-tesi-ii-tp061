import { NgModule }             from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent }        from "./component/home/home.component";
import { TimerComponent }       from "./component/timer/timer.component";
import { DisciplinesComponent } from "./component/disciplines/disciplines.component";

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "timer", component: TimerComponent },
  { path: "disciplines", component: DisciplinesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
