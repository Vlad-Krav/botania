import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlantsRoutingModule } from './plant-routing.module';
import { PlantItemComponent } from './plant-item/plant-item.component';
import { SharedModule } from '../shared/shared.module';
import { PlantNewComponent } from './plant-new/plant-new.component';
import { PlantEditComponent } from './plant-edit/plant-edit.component';
import { PlantDetailComponent } from './plant-detail/plant-detail.component';

@NgModule({
  declarations: [
    PlantNewComponent,
    PlantItemComponent,
    PlantEditComponent,
    PlantDetailComponent,
  ],
  imports: [CommonModule, PlantsRoutingModule, SharedModule],
  exports: [PlantItemComponent],
})
export class PlantsModule {

}

