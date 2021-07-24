import React from 'react'
import { NavLink } from 'react-router-dom';
import { Container, Header, LogoImg, Menu, TextoMenu, Botao, Creditos, Credito1, Credito2 } from './styles';
import logo from '../../logo.jpg'

export default function Home() {
    document.title = 'Info Solutions - Cadastros'

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

            <Creditos class="footer">
                <Credito1 href="https://taiguaracsp.github.io" target="_blank">Website developed by Taiguara Cavaliere</Credito1>
                <Credito2 href="https://www.freepik.com/vectors/design" target="_blank">Design vector created by freepik - www.freepik.com</Credito2>
            </Creditos>
        </Container>
    )
}