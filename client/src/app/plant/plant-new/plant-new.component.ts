import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Plant } from '../../shared/plant';
import { ActivatedRoute, Router } from '@angular/router';
import { PlantService } from '../../core/plant.service';

@Component({
  selector: 'app-plant-new',
  templateUrl: './plant-new.component.html',
  styleUrls: ['./plant-new.component.scss']
})

export class PlantNewComponent implements OnInit {
  pageTitle = 'Nueva planta';
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
          Validators.maxLength(255),
        ],
      ],
      tipo: '',
      valoracion: '',
      descripcion: '',
      descripcionCorta: '',
      imagen: '',
    });

    // Read the plant Id from the route parameter
    this.plantId = parseInt(this.activatedroute.snapshot.params['plantId']);
  }

  savePlant(): void {
    if (this.plantForm.valid) {
      if (this.plantForm.dirty) {
        this.plant = this.plantForm.value;
        this.plant.id = this.plantId;

        this.plantService.createPlant(this.plant).subscribe(
          () => this.onSaveComplete(),
          (error: any) => (this.errorMessage = <any>error)
        );
      } else {
        this.onSaveComplete();
      }
    } else {
      this.errorMessage = 'Please correct the validation errors.';
    }
  }

  onSaveComplete(): void {
    // Reset the form to clear the flags
    this.plantForm.reset();
    this.router.navigate(['']);
  }
}
