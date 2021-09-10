import { NgModule }           from "@angular/core";
import { MatButtonModule }    from "@angular/material/button";
import { MatIconModule }      from "@angular/material/icon";
import { MatDividerModule }   from "@angular/material/divider";
import { MatListModule }      from "@angular/material/list";
import { MatSidenavModule }   from "@angular/material/sidenav";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule }     from "@angular/material/input";

const materials = [
  MatButtonModule,
  MatIconModule,
  MatDividerModule,
  MatListModule,
  MatSidenavModule,
  MatFormFieldModule,
  MatInputModule
];

@NgModule({
  imports: materials,
  exports: materials
})
export class MaterialModule {
}
