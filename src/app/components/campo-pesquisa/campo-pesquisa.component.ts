import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { PesquisaService } from '../../services/pesquisa.service'

@Component({
  selector: 'campo-pesquisa',
  templateUrl: './campo-pesquisa.component.html',
  styleUrls: ['./campo-pesquisa.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class CampoPesquisaComponent {

  constructor(private service:PesquisaService){}

  @Input() id:string = "";

  @Input() placeholder:string = "";

  @Input() url:string = "";

  @Output() PesquisaJsonOUT = new EventEmitter<any>();

  solicitarPesquisa(pesquisa:string){

    this.service.requisicaoGet(pesquisa,this.id,this.url).subscribe(
      {
        next: (resposta) => {
          //console.log(resposta)
          this.PesquisaJsonOUT.emit(resposta)

        },
        error: (err) => {
          this.PesquisaJsonOUT.emit(false)
          alert(`Sem resultados para a busca de: ${this.id}.`)
        }
      }
    )

  }// solicitarClientes()

}//export class CampoPesquisaComponent{}
