import { Routes } from '@angular/router';
import { AdmissaoComponent } from './admissao.component';
import { NovaAdmissaoComponent } from './nova-admissao/nova-admissao.component';

export const AdmissaoRoutes: Routes = [
    {
      path: '',
      component: AdmissaoComponent,
    },
    {
      path: 'nova',
      component: NovaAdmissaoComponent
    }
];
