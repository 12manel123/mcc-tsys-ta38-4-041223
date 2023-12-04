import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { TareaService } from '../tarea.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-formulario-tarea',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule, ReactiveFormsModule],
  templateUrl: './formulario-tarea.component.html',
  styleUrl: './formulario-tarea.component.css'
})
export class FormularioTareaComponent{
  title: string = '';
  description: string = '';

  constructor(private tareaService: TareaService) {}

  agregarTarea() {
    this.tareaService.agregarTarea({ title: this.title, description: this.description });
    this.limpiarCampos();
  }

  private limpiarCampos() {
    this.title = '';
    this.description = '';
  }
}
