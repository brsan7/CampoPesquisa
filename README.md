# CampoPesquisa

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.13.

Usado para encapsular o CampoPesquisa para `ANY USAGE` 

## USAGE

````HTML

<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <title>CampoPesquisa</title>
  <base href="/">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
</head>
  <body>

    <script src="./prototiposAngular/CadCliente/SGE/campo-pesquisa.js" type="module"></script>

    <campo-pesquisa
      id="Cliente"
      url="sge_consultas_json.asp">
    </campo-pesquisa>

    <campo-pesquisa
      id="Produto"
      url="sge_consultas_json.asp">
    </campo-pesquisa>

    <script type="text/javascript">

      const campoPesquisaCliente = document.getElementById("Cliente");
      campoPesquisaCliente.addEventListener('PesquisaJsonOUT', (event)=>{
        console.log(event.detail)
      })
      const campoPesquisaProduto = document.getElementById("Produto");
      campoPesquisaProduto.addEventListener('PesquisaJsonOUT', (event)=>{
        console.log(event.detail.produto)
      })
      
    </script>
  </body>
</html>  


  
````  

## Build

Run `ng build CampoPesquisa` to build the project. The build artifacts will be stored in the `dist/campo-pesquisa` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
