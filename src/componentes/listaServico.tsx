import { Component } from "react";

type props = {
  tema: string
}

export default class ListaServico extends Component<props> {
  render() {
    let estilo = `collection-item active ${this.props.tema}`
    return (
      <div className="collection">
        <a className="collection-item">Corte de Cabelo</a>
        <a className={estilo}>Manicure e Pedicure</a>
        <a className="collection-item">Design de Sobrancelhas</a>
        <a className="collection-item">Barba e Bigode</a>
      </div>
    )
  }
}
