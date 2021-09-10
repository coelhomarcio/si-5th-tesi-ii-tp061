import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class DisciplinesService {
  private _disciplines = [
    "Desenvolvimento para Servidores II",
    "Tópicos Especiais em Sistemas para Internet II",
    "Desenvolvimento para Dispositivos Móveis I",
    "Negócios e Marketing e Eletrônicos",
    "Projeto de Prototipagem e Testes de Usabilidade"
  ];
  private _disciplineModel = "";

  constructor() {
  }

  public get disciplines(): string[] {
    return this._disciplines;
  }

  public get disciplineModel(): string {
    return this._disciplineModel;
  }

  public set disciplineModel(value: string) {
    this._disciplineModel = value;
  }

  addDiscipline() {
    if (this.disciplineModel)
      this._disciplines.push(this.disciplineModel);
    this.disciplineModel = "";
  }

  deleteDiscipline(index: number) {
    if (this._disciplines[index])
      this._disciplines.splice(index, 1);
  }
}
