import { Routes } from '@angular/router';


export const AppRoutes: Routes = [
  {
    path: '', redirectTo: '/admissao/nova', pathMatch: 'full'
  },
  {
    path: 'admissao',
    loadChildren: ()=> import('./views/admissao/admissao.module')
    .then(m => m.AdmissaoModule),
  }

];
