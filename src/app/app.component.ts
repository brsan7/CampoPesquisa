import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Componentes - (desenvolvimento)';


  recebimentoPesquisa(resposta:any){

    console.log(resposta)
    return resposta


  }//recebimentoBuscaCliente()


}//export class AppComponent
