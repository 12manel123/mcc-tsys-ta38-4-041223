import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaAllTareasComponent } from './lista-all-tareas.component';

describe('ListaAllTareasComponent', () => {
  let component: ListaAllTareasComponent;
  let fixture: ComponentFixture<ListaAllTareasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaAllTareasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListaAllTareasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
