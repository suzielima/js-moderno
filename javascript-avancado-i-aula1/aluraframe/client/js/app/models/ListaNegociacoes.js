class ListaNegociacoes {

  constructor() {
    this._negociacoes = []
  }
  adiciona(negociacao) {
    this._negociacoes.push(negociacao);
  }
  get _negociacoes() {
    return this._negociacoes;
  }
}