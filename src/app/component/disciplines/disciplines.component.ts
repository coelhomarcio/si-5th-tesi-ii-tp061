import { Component, OnInit } from "@angular/core";

import { DisciplinesService } from "../../service/disciplines.service";

@Component({
  selector:    "app-disciplines",
  templateUrl: "./disciplines.component.html",
  styleUrls:   [
    "./disciplines.component.scss",
    "../../shared/scss/home-disciplines.scss",
    "../../shared/scss/timer-disciplines.scss"
  ]
})
export class DisciplinesComponent implements OnInit {
  subTitle = "Disciplinas";
  sectionDisciplinesTitle = "Em curso";
  sectionFormTitle = "Adicionar";

  constructor(public disciplines: DisciplinesService) { }

  submit() {
    console.log("submit");
    this.disciplines.addDiscipline();
  }

  error() {
    return (this.disciplines.disciplineModel === "");
  }

  ngOnInit(): void {
  }
}
