import { NgModule } from '@angular/core';
import { AdmissaoComponent } from './admissao.component';
import { NovaAdmissaoComponent } from './nova-admissao/nova-admissao.component';
import { AdmissaoRoutes } from './admissao.routing';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'app/shared/modules';
import { CommonModule } from '@angular/common';
import { TextMaskModule } from 'angular2-text-mask';
import { InfoCardModule } from 'app/shared/components/info-card/info-card.module';

@NgModule({
  declarations: [
    AdmissaoComponent,
    NovaAdmissaoComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    TextMaskModule,
    RouterModule.forChild(AdmissaoRoutes),
    InfoCardModule
  ]
})
export class AdmissaoModule { }
