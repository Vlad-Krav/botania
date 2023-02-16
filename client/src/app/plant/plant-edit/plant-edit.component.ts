import { Component, OnInit, AfterViewInit, OnDestroy, ViewChildren, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormArray, Validators, FormControlName } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Plant } from '../../shared/plant';
import { PlantService } from '../../core/plant.service';
@Component({
  templateUrl: './plant-edit.component.html',
})
export class PlantEditComponent implements OnInit {
  pageTitle = 'Editar planta';
  errorMessage: string = '';
  plantForm: any;

  plantId: number = 0;
  plant: Plant = {
    id: 0,
    nombre: '',
    valoracion: 0,
    descripcionCorta: '',
    descripcion: '',
    tipo: '',
    imagen: ''
  };

  constructor(
    private fb: FormBuilder,
    private activatedroute: ActivatedRoute,
    private router: Router,
    private plantService: PlantService
  ) {}

  ngOnInit(): void {
    this.plantForm = this.fb.group({
      nombre: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(50),
        ],
      ],
      valoracion: '',
      descripcion: '',
      descripcionCorta: '',
      tipo: '',
      imagen: '',
    });

    // Read the plant Id from the route parameter
    this.plantId = parseInt(this.activatedroute.snapshot.params['id']);
    this.getPlant(this.plantId);
  }

  getPlant(id: number): void {
    this.plantService.getPlantById(id).subscribe(
      (plant: Plant) => this.displayPlant(plant),
      (error: any) => (this.errorMessage = <any>error)
    );
  }

  displayPlant(plant: Plant): void {
    if (this.plantForm) {
      this.plantForm.reset();
    }
    this.plant = plant;
    this.pageTitle = `Editar planta: ${this.plant.nombre}`;

    // Update the data on the form
    this.plantForm.patchValue({
      nombre: this.plant.nombre,
      valoracion: this.plant.valoracion,
      descripcion: this.plant.descripcion,
      descripcionCorta: this.plant.descripcionCorta,
      tipo: this.plant.tipo,
      imagen: this.plant.imagen,
    });
  }

  deletePlant(): void {
    if (this.plant.id === 0) {
      // Don't delete, it was never saved.
      this.onSaveComplete();
    } else {
      if (confirm(`¿De verdad quieres borrar: ${this.plant.nombre}?`)) {
        this.plantService.deletePlant(this.plant.id).subscribe(
          () => this.onSaveComplete(),
          (error: any) => (this.errorMessage = <any>error)
        );
      }
    }
  }

  savePlant(): void {
    if (this.plantForm.valid) {
      if (this.plantForm.dirty) {
        this.plant = this.plantForm.value;
        this.plant.id = this.plantId;

        this.plantService.updatePlant(this.plant).subscribe(
          () => this.onSaveComplete(),
          (error: any) => (this.errorMessage = <any>error)
        );
      } else {
        this.onSaveComplete();
      }
    } else {
      this.errorMessage = 'Por favor, corrige los errores de validación.';
    }
  }

  onSaveComplete(): void {
    // Reset the form to clear the flags
    this.plantForm.reset();
    this.router.navigate(['']);
  }
}
