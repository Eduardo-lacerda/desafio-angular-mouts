import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { Store, StoreModule } from '@ngrx/store';

import { NovaAdmissaoComponent } from './nova-admissao.component';
import * as footerButton from 'app/core/store/footer';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
describe('NovaAdmissaoComponent', () => {
  let component: NovaAdmissaoComponent;
  let fixture: ComponentFixture<NovaAdmissaoComponent>;
  let fakeStore = {
    dispatch: function(action: any) {

    }
  }
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NovaAdmissaoComponent ],
      imports: [
        ReactiveFormsModule,
        BrowserAnimationsModule
      ],
      providers: [
        {provide: Store, useValue: fakeStore}
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NovaAdmissaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Criação do componente', () => {
    expect(component).toBeTruthy();
  });

  it('Pesquisa de informações a partir do CPF', () => {
    spyOn(fakeStore, 'dispatch');
    component.searchInfo();
    expect(fakeStore.dispatch).toHaveBeenCalledWith(new footerButton.CleanAllFooterButtonAction());
    expect(fakeStore.dispatch).toHaveBeenCalledWith(new footerButton.AddFooterButtonAction(component.secondaryButton));
  });
});
