import { Component, OnInit } from '@angular/core';
import { malUwuService } from '../mal-uwu.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage implements OnInit {
  categoriasBromas: string[] = [];
  bromaAleatoria: string = '';

  constructor(private malUwuService: malUwuService) {}

  ngOnInit() {
    this.BromaAleatoria();
    this.CategoriasBromas();
  }


  CategoriasBromas() {
    this.malUwuService.getCategoriasBromas().subscribe((categorias) => {
      this.categoriasBromas = categorias;
    });
  }

  BromaAleatoria() {
    this.malUwuService.getBromaAleatoria().subscribe((broma) => {
      this.bromaAleatoria = broma.value;
    });
  }

 
}
