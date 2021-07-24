import React from 'react'
import { useState } from 'react';
import { NavLink } from "react-router-dom";
import { Container, Header, LogoImg, FormClientes, FormDiv, FormLabel, FormInput, InputNumerico, BotaoVoltar, Botao, DivBotao, Creditos, Credito1, Credito2 } from './styles';
import logo from '../../logo.jpg'

export default function Clientes() {
    document.title = 'Info Solutions - Cadastros'

    const setStatus = useState(false);
    const [clientData, setClientData] = useState({
        nome: "",
        endereco: "",
        cpf: "",
        telefone: "",
        email: "",
    });

    function handleChange(e) {
        const field = e.target.getAttribute("id");
        const value = e.target.value;

        setClientData({
            ...clientData,
            [field]: value,
        });
    }

    function setDataToStorage(e) {
        e.preventDefault();
        if (
            clientData.nome !== "" &&
            clientData.endereco !== "" &&
            clientData.cpf !== "" &&
            clientData.telefone !== "" &&
            clientData.email !== ""
        ) {
            localStorage.setItem(
                `Cliente: ${clientData.cpf}`,
                JSON.stringify(clientData)
            );
            setClientData({
                nome: "",
                endereco: "",
                cpf: "",
                telefone: "",
                email: "",
            });
            alert("Cliente cadastrado com sucesso!");
        } else {
            alert("Preencha todos os campos corretamente");
        }
    }

    return (
        <Container>
            <Header>
                <LogoImg src={logo} alt="Logo" />
                <h1>Info Solutions</h1>
            </Header>


            <FormClientes className="form-produtos" onSubmit={setDataToStorage}>
                <FormDiv className="form-inputs">
                    <FormLabel htmlFor="nome" className="form-label">
                        Nome:
                    </FormLabel>
                    <FormInput id="nome" type="text" name="nome" className="form-input" placeholder="Nome completo" value={clientData.nome} onChange={handleChange} />
                </FormDiv>

                <FormDiv className="form-inputs">
                    <FormLabel htmlFor="endereco" className="form-label">
                        Endereço:
                    </FormLabel>
                    <FormInput id="endereco" type="text" name="endereco" className="form-input" placeholder="Endereço" value={clientData.endereco} onChange={handleChange} />
                </FormDiv>

                <FormDiv className="form-inputs">
                    <FormLabel htmlFor="cpf" className="form-label">
                        CPF:
                    </FormLabel>
                    <InputNumerico id="cpf" type="text" name="cpf" className="form-input" placeholder="CPF (Somente Números)" value={clientData.cpf} onChange={handleChange} format="###.###.###-##" mask="_" inputMode="numeric" />
                </FormDiv>

                <FormDiv className="form-inputs">
                    <FormLabel htmlFor="telefone" className="form-label">
                        Telefone:
                    </FormLabel>
                    <InputNumerico id="telefone" type="text" name="telefone" className="form-input" placeholder="Telefone (Somente Números)" value={clientData.telefone} onChange={handleChange} format="(##) #####-####" mask="_" />
                </FormDiv>

                <FormDiv className="form-inputs">
                    <FormLabel htmlFor="email" className="form-label">
                        E-mail:
                    </FormLabel>
                    <FormInput id="email" type="email" name="email" className="form-input" placeholder="E-mail" value={clientData.email} onChange={handleChange} />
                </FormDiv>

                <DivBotao>
                    <NavLink to="/">
                        <BotaoVoltar className="form-input-btn">VOLTAR</BotaoVoltar>
                    </NavLink>
                    <Botao className="form-input-btn" type="submit">CADASTRAR CLIENTE</Botao>
                </DivBotao>
            </FormClientes>

            <Creditos class="footer">
                <Credito1 href="https://taiguaracsp.github.io" target="_blank">Website developed by Taiguara Cavaliere</Credito1>
                <Credito2 href="https://www.freepik.com/vectors/design" target="_blank">Design vector created by freepik - www.freepik.com</Credito2>
            </Creditos>

        </Container>
    )
}