import { Component, OnInit } from "@angular/core";

@Component({
  selector:    "app-header",
  templateUrl: "./header.component.html",
  styleUrls:   ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  title = "Temporizador com Disciplinas";
  name = "Marcio Rodrigues Paiva Coelho";
  ra = "0050831921015";
  gits = [
    { label: "GitHub Page", link: "https://coelhomarcio.github.io" },
    { label: "Repositório GitHub", link: "https://github.com/coelhomarcio" }
  ];
  navListItems = [
    { label: "Home", link: "home", icon: "home" },
    { label: "Temporizador", link: "timer", icon: "timer" },
    { label: "Disciplinas", link: "disciplines", icon: "school" }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
