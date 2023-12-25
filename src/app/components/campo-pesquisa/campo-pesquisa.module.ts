import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CampoPesquisaComponent } from '../campo-pesquisa/campo-pesquisa.component';



@NgModule({
  declarations: [
    CampoPesquisaComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[CampoPesquisaComponent]
})
export class CampoPesquisaModule { }
