import { NgModule }         from "@angular/core";
import { MatToolbarModule } from "@angular/material/toolbar";

const materials = [
  MatToolbarModule
];

@NgModule({
  imports: materials,
  exports: materials
})
export class MaterialModule {
}
