import { Component } from '@angular/core';
import { TareaService } from '../tarea.service';

@Component({
  selector: 'app-lista-all-tareas',
  standalone: true,
  imports: [],
  templateUrl: './lista-all-tareas.component.html',
  styleUrl: './lista-all-tareas.component.css'
})
export class ListaAllTareasComponent {
  constructor(private tareaService: TareaService) {}

  getTareas() {
    return this.tareaService.getTareas();
  }

  borrarTarea(id: number) {
    this.tareaService.borrarTarea(id);
  }

  marcarComoCompletada(id: number) {
    this.tareaService.marcarComoCompletada(id);
  }
}
