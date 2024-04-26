/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { VehicleListComponent } from './vehicle-list.component';


describe('VehicleListComponent', () => {
  let component: VehicleListComponent;
  let fixture: ComponentFixture<VehicleListComponent>;

  

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ VehicleListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleListComponent);
    component = fixture.componentInstance;
    // Simulación de datos
    component.vehiculos= [
  {
    id: 1,
    marca: "Renault",
    linea: "Sandero",
    referencia: "Stepway",
    modelo: 2020,
    kilometraje: 15000,
    color: "Azul",
    imagen: "https://example.com/renault_sandero.jpg",
  },
  {
    id: 2,
    marca: "Chevrolet",
    linea: "Spark",
    referencia: "GTI",
    modelo: 2018,
    kilometraje: 30000,
    color: "Rojo",
    imagen: "https://example.com/chevrolet_spark.jpg",
  },
  {
    id: 3,
    marca: "Nissan",
    linea: "March",
    referencia: "Active",
    modelo: 2019,
    kilometraje: 20000,
    color: "Blanco",
    imagen: "https://example.com/nissan_march.jpg",
  },
];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('debe tener tres filas más el encabezado', () => {
    
    const rows = fixture.debugElement.queryAll(By.css('tbody tr')); // Obtener filas del cuerpo de la tabla
    expect(rows.length).toBe(3); // Debe haber tres filas

    // Verificar que hay un encabezado
    const headers = fixture.debugElement.queryAll(By.css('thead tr')); // Obtener el encabezado
    expect(headers.length).toBe(1); // Debe haber un encabezado


    expect(rows[0].nativeElement.textContent).toContain('Renault');
    expect(rows[1].nativeElement.textContent).toContain('Chevrolet');
    expect(rows[2].nativeElement.textContent).toContain('Nissan');
  });
});
