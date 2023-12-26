import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class PesquisaService {

  constructor(private http:HttpClient){

  }

  requisicaoGet(pesquisa:string, tipoPesquisa:string, url:string):Observable<any>{

    return this.http.get<any>(`${url}/${tipoPesquisa}/${pesquisa}`)

  }

}
