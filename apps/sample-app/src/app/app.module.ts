import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DataTestIdModule } from '@data-testid/data-test-id';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, DataTestIdModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
