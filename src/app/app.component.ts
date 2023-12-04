import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ListaTareasComponent } from './lista-tareas/lista-tareas.component';
import { ListaAllTareasComponent } from './lista-all-tareas/lista-all-tareas.component';

import { FormularioTareaComponent } from './formulario-tarea/formulario-tarea.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,ListaTareasComponent,FormularioTareaComponent,ListaAllTareasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'mcc-tsys-ta38-4-041223';
}
