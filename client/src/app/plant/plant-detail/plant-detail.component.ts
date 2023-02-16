import { Component, OnInit } from '@angular/core';
import { PlantService } from '../../core/plant.service';
import { Plant } from '../../shared/plant';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-plant-detail',
  templateUrl: './plant-detail.component.html',
  styleUrls: ['./plant-detail.component.scss']
})
export class PlantDetailComponent implements OnInit {
  plant: Plant = {
    id: 0,
    nombre: '',
    valoracion: 0,
    descripcionCorta: '',
    descripcion: '',
    tipo: '',
    imagen: ''
  };
  plantId: number = 0;

  constructor(
    private activatedroute: ActivatedRoute,
    private router: Router,
    private plantService: PlantService
  ) {}

  ngOnInit() {
    this.plantId = parseInt(this.activatedroute.snapshot.params['plantId']);
    this.plantService
      .getPlantById(this.plantId)
      .subscribe((data: Plant) => (this.plant = data));
  }
  goEdit(): void {
    this.router.navigate(['/plants', this.plantId, 'edit']);
  }
  onBack(): void {
    this.router.navigate(['']);
  }
}
