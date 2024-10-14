import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarEnderecosComponent } from './consultar-enderecos.component';

describe('ConsultarEnderecosComponent', () => {
  let component: ConsultarEnderecosComponent;
  let fixture: ComponentFixture<ConsultarEnderecosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultarEnderecosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultarEnderecosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
