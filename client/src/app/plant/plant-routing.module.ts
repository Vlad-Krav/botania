import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlantDetailComponent } from './plant-detail/plant-detail.component';
import { PlantEditComponent } from './plant-edit/plant-edit.component';
import { PlantNewComponent } from './plant-new/plant-new.component';

const routes: Routes = [
  { path: 'plants/:id/new', component: PlantNewComponent },
  { path: 'plants/:plantId', component: PlantDetailComponent },
  { path: 'plants/:id/edit', component: PlantEditComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlantsRoutingModule {}
