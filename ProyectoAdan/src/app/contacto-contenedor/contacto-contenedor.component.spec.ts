import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactoContenedorComponent } from './contacto-contenedor.component';

describe('ContactoContenedorComponent', () => {
  let component: ContactoContenedorComponent;
  let fixture: ComponentFixture<ContactoContenedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactoContenedorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactoContenedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
