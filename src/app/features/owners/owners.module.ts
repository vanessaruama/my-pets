import { NgModule } from "@angular/core"
import { PoTemplatesModule } from "@po-ui/ng-templates";
import { SharedModule } from "src/app/shared/shared.module";
import { OwnersRoutingModule } from "./owners-routing.module";
import { OwnersComponent } from "./owners.component";
import { OwnersFormComponent } from './owners-form/owners-form.component';
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    OwnersComponent,
    OwnersFormComponent
  ],
  imports: [
    SharedModule,
    OwnersRoutingModule,
    PoTemplatesModule,
    ReactiveFormsModule
  ]
})
export class OwnersModule { }
