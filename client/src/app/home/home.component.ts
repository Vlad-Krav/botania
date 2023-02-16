import { Component, OnInit } from '@angular/core';
import { Plant } from '../shared/plant';
import { PlantService } from '../core/plant.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  plants: Plant[] = [];
  constructor(private plantService: PlantService) {}

  ngOnInit() {
    this.plantService
      .getPlants() // Creo que no lo esta guardando bien porque luego imprime mal
      .subscribe((data: any) => {
        this.plants = (data[0]);
      }
      );
  }
}
