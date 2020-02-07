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

    let negociacao = new Negociacao(
      DateHelper.textoParaData(this._inputData.value),
      this._inputQuantidade.value,
      this._inputValor.value
    );
    console.log(negociacao);

    console.log(DateHelper.dataParaTexto(negociacao.data));







    // let data = new Date(...this._inputData.value
    //   .split('-')
    //   .map((item, indice) => item - indice % 2)
    // );

    // console.log(data);

    // let negociacao = new Negociacao(
    //   data,
    //   this._inputQuantidade.value,
    //   this._inputValor.value
    // );
    // console.log(negociacao.data);

    // //para pegar a data no padrao brasileiro

    // let diaMesAno = negociacao.data.getDate() + '/' + (negociacao.data.getMonth() +1) + '/' + negociacao.data.getFullYear();
    // console.log(diaMesAno);

    //esse +1 adicionado no getMonth é para a contagem do mês, pois o array do ano veio de 0 a 11 (o 1 adicionar o mês exato que queremos)
    //lembrando que operações precisam ser chamadas primeiro antes da concatenação, apenas adicionando entre () o que deseja ser operado primeiro.


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