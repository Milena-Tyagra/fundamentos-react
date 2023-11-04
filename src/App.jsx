import "./App.css"
import React from 'react'

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from './components/basicos/Aleatorio'
import Card from './components/layout/Card'
import Familia from "./components/basicos/Familia"
import FamiliaMembro from "./components/basicos/FamiliaMembro"
import ListaAlunos from "./components/repeticao/ListaAlunos"
import ListaProdutos from "./components/repeticao/ListaProdutos"
import ParOuImpar from "./components/condicional/ParOuImpar"
import UsuarioInfo from "./components/condicional/UsuarioInfo"
import DiretaPai from "./components/comunicacao/DiretaPai"
import IndiretaPai from "./components/comunicacao/IndiretaPai"
import Input from "./components/formulario/Input"
import Mega from "./components/mega/Mega"


export default function App(props) {
    return (
        <div className="App">
            <h1>Fundamentos React</h1>
            <div className='Cards'>
                <Card titulo="#01 - Primeiro Componente">
                    <Primeiro />
                </Card>

                <Card titulo="#02 - Com Parâmetros">
                    <ComParametro 
                        titulo="Situação do aluno"
                        aluno="Pedro"
                        nota={9.3}
                />
                </Card>

                <Card titulo="#03 - Fragmento">
                    <Fragmento />
                </Card>

                <Card titulo="#04 - Desafio Aleatório">
                    <Aleatorio 
                        min={1}
                        max={10}
                    />
                </Card>

                <Card titulo="#05 - Componente com Filhos">
                   <Familia sobrenome="Silva">
                        <FamiliaMembro nome="Pedro"/>
                        <FamiliaMembro nome="Ana" />
                        <FamiliaMembro nome="Levi" />
                        <FamiliaMembro nome="Nicolas" />
                    </Familia>
                </Card>

                <Card titulo="#06 - Repetição">
                   <ListaAlunos />
                </Card>

                <Card titulo="#07 - Desafio Repetição">
                   <ListaProdutos />
                </Card>

                <Card titulo="#08 - Renderização condicional">
                   <ParOuImpar numero={5}/>
                   <br/>
                   <UsuarioInfo usuario={{nome: 'Levi'}}/>
                   <UsuarioInfo />
                </Card>

                <Card titulo="#09 - Comunicação Direta">
                   <DiretaPai />
                </Card>

                <Card titulo="#10 - Comunicação Indireta">
                   <IndiretaPai />
                </Card>

                <Card titulo="#11 - Componente Controlado">
                   <Input />
                </Card>

                <Card titulo="#12 - Desafio Mega-sena">
                   <Mega />
                </Card>
            </div>
        </div>
    )
}