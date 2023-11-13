import { NgModule } from '@angular/core';
import { LowerCasePipe } from '@angular/common';

import { InfoCardComponent } from './info-card.component';
import { FlexLayoutModule } from "@angular/flex-layout"
import { CommonModule } from '@angular/common';
import { SharedModule } from 'app/shared/modules';
@NgModule({
  declarations: [
    InfoCardComponent,
  ],
  imports: [
    SharedModule,
    FlexLayoutModule,
    CommonModule
  ],
  exports: [
    InfoCardComponent,
  ],
  providers: [
    LowerCasePipe
  ]
})
export class InfoCardModule { }
