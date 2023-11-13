import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LowerCasePipe } from '@angular/common';

import { SharedModule } from '../../shared/modules';
import { FlexLayoutModule } from "@angular/flex-layout"
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
  ],
  imports: [
    SharedModule,
    FlexLayoutModule,
    CommonModule,
    BrowserAnimationsModule
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
  ],
  providers: [
    LowerCasePipe
  ]
})
export class CoreComponentsModule { }
