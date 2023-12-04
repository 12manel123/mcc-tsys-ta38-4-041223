import { Component, EventEmitter, Output } from '@angular/core';
import { TareaService } from '../tarea.service';
@Component({
  selector: 'app-lista-tareas',
  standalone: true,
  imports: [],
  templateUrl: './lista-tareas.component.html',
  styleUrl: './lista-tareas.component.css'
})
export class ListaTareasComponent {
  constructor(private tareaService: TareaService) {}

  getTareas() {
    return this.tareaService.getTareasPendientes();
  }

  borrarTarea(id: number) {
    this.tareaService.borrarTarea(id);
  }

  marcarComoCompletada(id: number) {
    this.tareaService.marcarComoCompletada(id);
  }
}
