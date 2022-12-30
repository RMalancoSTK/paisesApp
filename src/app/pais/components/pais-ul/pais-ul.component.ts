import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-pais-ul',
  templateUrl: './pais-ul.component.html',
  styles: [],
})
export class PaisUlComponent implements OnInit {
  @Output() onSugerido: EventEmitter<string> = new EventEmitter();

  @Input() termino: string = '';

  @Input() paisesSugeridos: Country[] = [];
  @Input() mostrarSugerencias: boolean = false;
  @Input() hayError: boolean = false;
  @Input() paises: Country[] = [];
  @Input() placeholder: string = '';
  @Input() tipoBusqueda: string = '';

  constructor() {}

  ngOnInit(): void {}

  buscar(termino: string) {
    this.onSugerido.emit(termino);
  }

  sugerencias(termino: string) {
    this.onSugerido.emit(termino);
  }

  buscarSugerido(termino: string) {
    this.onSugerido.emit(termino);
  }
}
