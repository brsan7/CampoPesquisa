
import { ApplicationRef, NgModule } from '@angular/core';
import { DoBootstrap } from '@angular/core';
import { Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


//import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { CampoPesquisaModule } from './components/campo-pesquisa/campo-pesquisa.module'
import { CampoPesquisaComponent } from './components/campo-pesquisa/campo-pesquisa.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    //AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CampoPesquisaModule
  ],
  providers: []
})
export class ElementModule implements DoBootstrap {

  constructor(
    private injector:Injector
  ){}

  ngDoBootstrap(appRef: ApplicationRef) {

    const campoPesquisa = createCustomElement(CampoPesquisaComponent, {
      injector: this.injector
    });

    customElements.define('campo-pesquisa', campoPesquisa);

  }

}
