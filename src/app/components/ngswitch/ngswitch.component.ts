import { Component } from '@angular/core';

@Component({
  selector: 'app-ngswitch',
  templateUrl: './ngswitch.component.html',
  styleUrls: ['./ngswitch.component.css']
})
export class NgswitchComponent {
  productos:string[] = [];
  constructor() {
    this.productos = ['leche', 'cacao', 'avellanas', 'azucar', 'nocilla', 'fruta'];
  }
  comprarProducto() {
    this.productos.pop();
  }

}
