import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman', 'Iroman', 'Hulk', 'Thor','Capitan America'];
  datoBorrado: string ='';
  
  borrarHeroe(){
    console.log('borrando...');
    const heroeBorrado = this.heroes.shift() || '';
    console.log('borrando...', heroeBorrado);
    this.datoBorrado = heroeBorrado;
  }
}
