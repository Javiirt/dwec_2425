import { Component } from '@angular/core';

@Component({
  selector: 'app-productos',
  standalone: false,
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {
  products = [
    { name: 'Pelota de futbol', description: 'Pelota de futbol', image: '/images/futbol.png' },
    { name: 'Pelota de basket', description: 'Pelota de basket', image: '/images/basket.png' },
    { name: 'Pelota de beisbol', description: 'Pelota de beisbol', image: '/images/beisbol.png' }
  ];
}