import { Component } from "react";

type props = {
  tema: string
}

export default class FormularioCadastroServico extends Component<props> {
  render() {
    let estiloBotao = `btn waves-effect waves-light ${this.props.tema}`
    return (
      <div className="row">
        <form className="col s12">
          <div className="row">
            <div className="input-field col s6">
              <input id="nome_servico" type="text" className="validate" />
              <label htmlFor="nome_servico">Nome do Serviço</label>
            </div>
            <div className="input-field col s6">
              <input id="preco_servico" type="number" step="0.01" className="validate" />
              <label htmlFor="preco_servico">Preço (R$)</label>
            </div>
          </div>
          <div className="row">
            <div className="col s12">
              <button className={estiloBotao} type="submit" name="action">
                Cadastrar Serviço
                <i className="material-icons right">send</i>
              </button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}
