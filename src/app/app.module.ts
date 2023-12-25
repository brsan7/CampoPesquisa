import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CampoPesquisaModule } from './components/campo-pesquisa/campo-pesquisa.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CampoPesquisaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
