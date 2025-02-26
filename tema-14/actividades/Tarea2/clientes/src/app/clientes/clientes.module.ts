import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientesService } from './clientes.service';
import { AltaClienteComponent } from './alta-cliente/alta-cliente.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AltaClienteComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [
    ClientesService
  ],
  exports: [AltaClienteComponent]
})
export class ClientesModule { }
