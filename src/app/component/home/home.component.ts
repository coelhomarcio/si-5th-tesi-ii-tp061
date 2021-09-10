import { Component, OnInit } from "@angular/core";

@Component({
  selector:    "app-home",
  templateUrl: "./home.component.html",
  styleUrls:   [
    "./home.component.scss",
    "../../shared/scss/home-disciplines.scss"
  ]
})
export class HomeComponent implements OnInit {
  subTitle = "Home";
  sectionTitle = "Projeto timer com disciplinas";

  constructor() { }

  ngOnInit(): void {
  }
}
