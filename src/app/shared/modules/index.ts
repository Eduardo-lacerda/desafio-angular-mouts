import { NgModule } from '@angular/core';
// Material Form Controls
import { MaterialModule } from './material.module';
import { IconModule } from './icon.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
  ],
  imports: [
    MaterialModule,
    IconModule,
    ReactiveFormsModule
  ],
  exports: [
    MaterialModule,
    IconModule,
    ReactiveFormsModule
  ],
  providers: [

  ]
})
export class SharedModule { }
