import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { PaisService } from '../../services/pais.service';
import {
  Country,
  Name,
  Languages,
  Currencies,
} from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [],
})
export class VerPaisComponent implements OnInit {
  pais!: Country;
  lenguages: Languages[] = [];
  currencies: Currencies[] = [];
  idioma!: string;
  moneda!: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private paisService: PaisService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.paisService.getDatosAlpha(id)),
        tap(console.log)
      )
      .subscribe((pais) => {
        this.pais = pais[0];
        this.lenguages = Object.values(this.pais.languages);
        this.currencies = Object.values(this.pais.currencies);
        this.idioma = this.lenguages[0].toString();
        this.moneda = this.currencies[0].name;
      });
  }
}
