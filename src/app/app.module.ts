import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HexGridsComponent } from './hex-grids/hex-grids.component';

@NgModule({
  declarations: [
    AppComponent,
    HexGridsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
