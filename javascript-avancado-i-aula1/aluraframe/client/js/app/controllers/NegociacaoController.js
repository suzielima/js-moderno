class NegociacaoController {

  constructor() {

    let $ = document.querySelector.bind(document);

    this._inputData = $('#data');
    this._inputQuantidade = $('#quantidade');
    this._inputValor = $('#valor');
    //_indicação para o programador q ele não pode alterar negociações.
  }

  adiciona(event) {
    event.preventDefault();

    console.log(typeof (this._inputData.value));
    console.log(this._inputData.value);
    


    //adicionar essa negociação em uma lista

    //Ao invés de:
    //let inputData = document.querySelector('#data');
    //let inputQuantidade = document.querySelector('#quantidade');
    //let inputValor = document.querySelector('#valor');

    //utilizar:
    //ao utilizar o bind(document), a querySelector foi associada a variável mas manteve a associação com o document

    // console.log(this.inputData.value);
    // console.log(this.inputQuantidade.value);
    // console.log(this.inputValor.value);

  }
}