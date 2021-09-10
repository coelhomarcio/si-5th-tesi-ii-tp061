import { Component, OnInit } from "@angular/core";

import { TimerService } from "../../service/timer.service";

@Component({
  selector:    "app-timer",
  templateUrl: "./timer.component.html",
  styleUrls:   [
    "./timer.component.scss",
    "../../shared/scss/timer-disciplines.scss"
  ]
})
export class TimerComponent implements OnInit {
  subTitle = "Temporizador";
  sectionSystemTitle = "Tempo online";
  sectionUserTitle = "Temporizador do usuário";
  sectionFormTitle = "Configurar temporizador";

  constructor(public systemTimer: TimerService, public userTimer: TimerService) {
  }

  submit() {
    if (!this.error())
      this.userTimer.userTimerPlay();
  }

  error() {
    return (isNaN(this.userTimer.userMillisecondModel) || this.userTimer.userMillisecondModel < 100);
  }

  formatTimer(milliseconds: number) {
    return new Date(milliseconds).toISOString().slice(11, -3);
  }

  systemTimerOutput() {
    return this.formatTimer(this.systemTimer.systemTimer);
  }

  userTimerOutput() {
    return this.formatTimer(this.userTimer.userTimer);
  }

  ngOnInit(): void {
  }
}
