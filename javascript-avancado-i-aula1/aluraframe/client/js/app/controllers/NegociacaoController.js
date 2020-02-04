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

    let data = new Date(...this._inputData.value
      .split('-')
      .map((item, indice) => item - indice % 2)
    );

    console.log(data);

    let negociacao = new Negociacao(
      data,
      this._inputQuantidade.value,
      this._inputValor.value
    );
      console.log(negociacao);

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