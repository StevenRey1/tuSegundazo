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
  conteoMarcas: { [key: string]: number } = {}; // Propiedad para almacenar el conteo de marcas

  constructor(private vehicleService: VehicleService) {}

  ngOnInit() {
    this.getVehicles(); // Obtiene los datos y luego asigna el resultado de contarMarcas
  }

  getVehicles(): void {
    this.vehicleService.getVehicles().subscribe((vehiculos: Vehicle[]) => {
      this.vehiculos = vehiculos;
      this.conteoMarcas = this.contarMarcas(vehiculos); // Asigna el resultado a conteoMarcas
    });
  }

  contarMarcas(vehiculos: Vehicle[]): { [key: string]: number } {
    return vehiculos.reduce((acc, vehiculo) => {
      const marca: string = vehiculo.marca; // Declarar explícitamente el tipo como string
  
      acc[marca] = (acc[marca] || 0) + 1; // Incrementar el contador para la marca
  
      return acc; // Devolver el acumulador con las ocurrencias
    }, {} as { [key: string]: number }); // Especificar que las claves son string y valores son number
  }
}

