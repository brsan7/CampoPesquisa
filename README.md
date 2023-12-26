# CampoPesquisa

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.13.

Usado para encapsular o CampoPesquisa para `ANY USAGE`.

Com o bootcamp da DIO, com o irmão Felipão,

E o artigo do irmão Prateek Mishra - (https://blog.bitsrc.io/diving-deep-into-angular-elements-c17a868d6894)

## USAGE

````HTML

<!DOCTYPE html><html lang="pt-BR"><head>
  <meta charset="utf-8">
  <title>CampoPesquisa</title>
  <base href="/">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
</head>
<body>
  <app-root></app-root>
    <script src="dist/campo-pesquisa/main.js" type="module"></script>

    <!--https://jsonplaceholder.typicode.com/users/{pesquisa}-->
    <campo-pesquisa
      id="users"
      placeholder="users"
      url="https://jsonplaceholder.typicode.com">
    </campo-pesquisa>

    <campo-pesquisa
      id="albums"
      placeholder="albums"
      url="https://jsonplaceholder.typicode.com">
    </campo-pesquisa>

    <script type="text/javascript">

      const campoPesquisaCliente = document.getElementById("users");
      campoPesquisaCliente.addEventListener('PesquisaJsonOUT', (event)=>{

        const usuariosJson=event.detail;
        if(usuariosJson !== false){
          console.log(usuariosJson)
          console.log(usuariosJson[0])
          console.log(usuariosJson[0].name)
        }

      })
      const campoPesquisaProduto = document.getElementById("albums");
      campoPesquisaProduto.addEventListener('PesquisaJsonOUT', (event)=>{

        const albumsJsonEXP=event.detail;
        if(albumsJsonEXP !== false){
          console.log(albumsJsonEXP)
          console.log(albumsJsonEXP[0])
          console.log(albumsJsonEXP[0].title)
        }

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
