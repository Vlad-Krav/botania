import { Component, Input, OnInit } from '@angular/core';
import { Plant } from '../../shared/plant';

@Component({
  selector: 'app-plant-item',
  templateUrl: './plant-item.component.html',
  styleUrls: ['./plant-item.component.scss'],
})
export class PlantItemComponent implements OnInit {
  ngOnInit(): void {
    console.log(this.plant);
  }
  @Input() plant: Plant = {
    id: 0,
    nombre: '',
    valoracion: 0,
    descripcionCorta: '',
    descripcion: '',
    tipo: '',
    imagen: ''
  };
}
