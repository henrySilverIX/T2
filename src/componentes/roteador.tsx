import { Component } from "react";
import BarraNavegacao from "./barraNavegacao";
import FormularioCadastroCliente from "./formularioCadastroCliente";
import ListaCliente from "./listaCliente";
import FormularioCadastroProduto from "./formularioCadastroProduto";
import ListaProduto from "./listaProduto";
import FormularioCadastroServico from "./formularioCadastroServico";
import ListaServico from "./listaServico";

type state = {
    tela: string
}

export default class Roteador extends Component<{}, state> {
    constructor(props: {} | Readonly<{}>) {
        super(props)
        this.state = {
            tela: 'Clientes'
        }
        this.selecionarView = this.selecionarView.bind(this)
    }

    selecionarView(novaTela: string, evento: Event) {
        evento.preventDefault()
        console.log(novaTela);
        this.setState({
            tela: novaTela
        })
    }

    render() {
        let barraNavegacao = <BarraNavegacao seletorView={this.selecionarView} tema="purple lighten-4" botoes={['Clientes', 'Cadastros', 'Produtos', 'Serviços']} />

        if (this.state.tela === 'Clientes') {
        return <>
            {barraNavegacao}
            <ListaCliente tema="purple lighten-4" />
        </>
        } else if (this.state.tela === 'Cadastros') {
        return <>
            {barraNavegacao}
            <FormularioCadastroCliente tema="purple lighten-4" />
        </>
        } else if (this.state.tela === 'Produtos') {
        return <>
            {barraNavegacao}
            <FormularioCadastroProduto tema="purple lighten-4" />
            <ListaProduto tema="purple lighten-4" />
        </>
        } else if (this.state.tela === 'Serviços') {
        return <>
            {barraNavegacao}
            <FormularioCadastroServico tema="purple lighten-4" />
            <ListaServico tema="purple lighten-4" />
        </>
        }


    }
}