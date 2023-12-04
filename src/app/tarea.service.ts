import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TareaService {
  private tareas: any[] = [];

  getTareas() {
    return this.tareas;
  }

  getTareasPendientes() {
    return this.tareas.filter(tarea => !tarea.completada);
  }

  agregarTarea(tarea: any) {
    this.tareas.push({ id: this.tareas.length + 1, ...tarea });
  }

  borrarTarea(id: number) {
    this.tareas = this.tareas.filter(tarea => tarea.id !== id);
  }

  marcarComoCompletada(id: number) {
    const tarea = this.tareas.find(t => t.id === id);
    if (tarea) {
      tarea.completada = true;
    }
  }
}
