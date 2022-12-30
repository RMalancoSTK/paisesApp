import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-continente',
  templateUrl: './por-continente.component.html',
  styles: [],
})
export class PorContinenteComponent {
  regiones: string[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  regionActiva: string = '';
  termino: string = '';
  hayError: boolean = false;
  paises: Country[] = [];

  constructor(private paisService: PaisService) {}

  getClassCSS(region: string): string {
    return region === this.regionActiva
      ? 'btn btn-primary me-1'
      : 'btn btn-outline-primary me-1';
  }

  activarRegion(region: string) {
    if (region === this.regionActiva) {
      return;
    }
    this.regionActiva = region;
    this.paises = [];
    this.paisService.buscarRegion(region).subscribe((paises) => {
      // console.log(paises);
      this.paises = paises;
    });
  }
}
