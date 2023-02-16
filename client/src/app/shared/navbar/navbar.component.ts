import { Component, OnInit } from '@angular/core';
import { PlantService } from '../../core/plant.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  id: any;

  constructor(private plantService: PlantService, private router: Router) {}

  ngOnInit() {}

  newPlant() {
    // Get max plant Id from the plant list
    this.plantService.getMaxPlantId().subscribe((data) => {
      this.id = data
      this.router.navigate(['/plants', this.id, 'new']);
    });
  }
}
