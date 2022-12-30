import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [],
})
export class PorRegionComponent {
  regiones: string[] = [
    'EU',
    'EFTA',
    'CARICOM',
    'PA',
    'AU',
    'USAN',
    'EEU',
    'AL',
    'ASEAN',
    'CAIS',
    'CEFTA',
    'NAFTA',
    'SAARC',
  ];
  regionActiva: string = '';
  termino: string = '';
  hayError: boolean = false;
  paises: Country[] = [];
  title: string = '';

  regionesTitulo: string[] = [
    'European Union',
    'European Free Trade Association',
    'Caribbean Community',
    'Pacific Alliance',
    'African Union',
    'Union of South American Nations',
    'Eurasian Economic Union',
    'Arab League',
    'Association of Southeast Asian Nations',
    'Central American Integration System',
    'Central European Free Trade Agreement',
    'North American Free Trade Agreement',
    'South Asian Association for Regional Cooperation',
  ];

  siRegionEsIgualaRegionTitulo(region: string): string {
    let regionTitulo: string = '';
    for (let i = 0; i < this.regiones.length; i++) {
      if (region === this.regiones[i]) {
        regionTitulo = this.regionesTitulo[i];
      }
    }
    return regionTitulo;
  }

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
    this.regionActiva = this.siRegionEsIgualaRegionTitulo(region);
    this.paises = [];
    this.paisService.buscarregionalblock(region).subscribe((paises) => {
      // console.log(paises);
      this.paises = paises;
    });
  }
}
