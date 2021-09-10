import { NgModule }                from "@angular/core";
import { BrowserModule }           from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule }             from "@angular/forms";
import { registerLocaleData }      from "@angular/common";
import localePt                    from "@angular/common/locales/pt";

import { AppRoutingModule } from "./app-routing.module";
import { MaterialModule }   from "./module/material/material.module";

import { AppComponent }         from "./app.component";
import { HeaderComponent }      from "./component/header/header.component";
import { HomeComponent }        from "./component/home/home.component";
import { TimerComponent }       from "./component/timer/timer.component";
import { DisciplinesComponent } from "./component/disciplines/disciplines.component";

import { TimerService }       from "./service/timer.service";
import { DisciplinesService } from "./service/disciplines.service";

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    TimerComponent,
    DisciplinesComponent
  ],
  imports:      [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    MaterialModule
  ],
  providers:    [
    TimerService,
    DisciplinesService
  ],
  bootstrap:    [AppComponent]
})
export class AppModule {
}
