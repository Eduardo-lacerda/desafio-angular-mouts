import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutes } from './app-routing';
import { AppComponent } from './app.component';
import { CoreComponentsModule } from './core/components';
import { SharedModule } from './shared/modules';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { SidenavService } from './shared/services/sidenav.service';
import { HttpClientModule } from '@angular/common/http';
import { MatIconRegistry } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { reducers } from './core/store';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    SharedModule,
    BrowserModule,
    RouterModule.forRoot(AppRoutes, {onSameUrlNavigation: 'reload'}),
    CoreComponentsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CommonModule,
    StoreModule.forRoot(reducers)
  ],
  providers: [
    SidenavService,
    MatIconRegistry
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
