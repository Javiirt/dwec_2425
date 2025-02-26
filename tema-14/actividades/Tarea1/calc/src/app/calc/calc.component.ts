import { Component } from '@angular/core';

@Component({
  selector: 'app-calc',
  standalone: false,
  templateUrl: './calc.component.html',
  styleUrl: './calc.component.css'
})
export class CalcComponent{
  public number1 : number=0;
  public number2 : number=0;
  public resultado : number=0;
  constructor() { }
  ngOnInit(): void {
  }
  public suma(){
    this.resultado = this.number1 + this.number2
  }  
}


