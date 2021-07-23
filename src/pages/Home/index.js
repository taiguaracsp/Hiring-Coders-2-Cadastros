import React from 'react'
import { NavLink } from 'react-router-dom';
import { Container, Header, LogoImg, Menu, TextoMenu, Botao} from './styles';
import logo from '../../logo.jpg'

export default function Home() {
    return (
        <Container>
            <Header>
                <LogoImg src={logo} alt="Logo" />
                <h1>Info Solutions</h1>
            </Header>

            <Menu>
                <TextoMenu>A Info Solutions oferece um sistema prático para cadastro de seus clientes e produtos. Escolha abaixo a opção desejada e preencha os dados corretamente para cadastrá-los!</TextoMenu>
                <NavLink to="/clientes">
                        <Botao className="form-input-btn">CLIENTES</Botao>
                </NavLink>
                <NavLink to="/produtos">
                        <Botao className="form-input-btn">PRODUTOS</Botao>
                </NavLink>
            </Menu>
        </Container>
    )
}