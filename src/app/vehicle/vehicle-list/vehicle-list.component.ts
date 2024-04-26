
import { Component, OnInit } from '@angular/core';
import { Vehicle } from '../vehicle';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.css']
})
export class VehicleListComponent implements OnInit {

  vehiculos: Vehicle[] = [];

  constructor(private vehicleService:VehicleService ) { }

  ngOnInit() {
    this.getVehicles();
  }

  getVehicles(): void {
    this.vehicleService.getVehicles().subscribe((vehiculos:Vehicle[]) => {
      this.vehiculos = vehiculos;
    });
  }

}
