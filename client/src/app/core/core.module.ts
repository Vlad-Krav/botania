import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlantService } from './plant.service';
import { HttpClientModule } from '@angular/common/http';

// Import for loading & configuring in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { PlantData } from './plant-data';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,

  ],
  providers: [PlantService],
})
export class CoreModule {}
