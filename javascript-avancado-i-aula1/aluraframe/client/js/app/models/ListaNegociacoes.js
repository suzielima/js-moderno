class ListaNegociacoes {

  constructor(contexto, armadilha) {

    this._negociacoes = [];
    this._armadilha = armadilha;
    this._contexto = contexto;
  }
  adiciona(negociacao) {

    this._negociacoes.push(negociacao);
    //this._armadilha(this);
  }
  get negociacoes() {

    return [].concat(this._negociacoes);
  }
  esvazia() {

    this._negociacoes = [];
    //this._armadilha(this);

  }
}