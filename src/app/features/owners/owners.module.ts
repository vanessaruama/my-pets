import { NgModule } from "@angular/core"
import { PoTemplatesModule } from "@po-ui/ng-templates";
import { SharedModule } from "src/app/shared/shared.module";
import { OwnersRoutingModule } from "./owners-routing.module";
import { OwnersComponent } from "./owners.component";

@NgModule({
  declarations: [
    OwnersComponent
  ],
  imports: [
    SharedModule,
    OwnersRoutingModule,
    PoTemplatesModule
  ]
})
export class OwnersModule { }