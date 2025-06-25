import { Component } from "react";

type props = {
  tema: string
}

export default class ListaProduto extends Component<props> {
  render() {
    let estilo = `collection-item active ${this.props.tema}`
    return (
      <div className="collection">
        <a className="collection-item">Shampoo Capilar</a>
        <a className={estilo}>Creme Hidratante</a>
        <a className="collection-item">Máscara Facial</a>
        <a className="collection-item">Óleo de Barba</a>
      </div>
    )
  }
}
