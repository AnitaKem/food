import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import * as fromServices from './services';
import * as fromContainers from './containers';

@NgModule({
  declarations: [
    AppComponent,
    ...fromContainers.containers,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    ...fromServices.services,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
