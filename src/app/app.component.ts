import { Component } from "@angular/core";

import { TimerService } from "./service/timer.service";

@Component({
  selector: "app-root",
  template: "<app-header></app-header>"
})
export class AppComponent {
  title = "Temporizador com Disciplinas";

  constructor(public systemTimer: TimerService) {
    this.systemTimer.systemTimerStart(1000);
  }
}
