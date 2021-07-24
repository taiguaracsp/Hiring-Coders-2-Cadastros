import React from 'react'
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Header, LogoImg, FormProdutos, FormDiv, FormLabel, FormInput, InputNumerico, DivBotao, BotaoVoltar, Botao, Creditos, Credito1, Credito2 } from './styles';
import logo from '../../logo.jpg'

export default function Produtos() {
    document.title = 'Info Solutions - Cadastros'

    const setStatus = useState(false);
    const [productData, setProductData] = useState({
        id: "",
        produto: "",
        categoria: "",
        preco: "",
        quantidade: "",
    });

    function handleChange(e) {
        const field = e.target.getAttribute("id");
        const value = e.target.value;

        setProductData({
            ...productData,
            [field]: value,
        });
    }

    function setDataToStorage(e) {
        e.preventDefault();
        if (
            productData.id !== "" &&
            productData.produto !== "" &&
            productData.categoria !== "" &&
            productData.preco !== "" &&
            productData.quantidade !== ""
        ) {
            localStorage.setItem(
                `Produto: ${productData.id}`,
                JSON.stringify(productData)
            );
            setProductData({
                id: "",
                produto: "",
                categoria: "",
                preco: "",
                quantidade: "",
            });
            alert("Produto cadastrado com sucesso!");
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


            <FormProdutos className="form-produtos" onSubmit={setDataToStorage}>
                <FormDiv className="form-inputs">
                    <FormLabel htmlFor="id" className="form-label">
                        ID do Produto:
                    </FormLabel>
                    <InputNumerico id="id" type="text" name="id" className="form-input" placeholder="ID" value={productData.id} onChange={handleChange} format="#####" inputMode="numeric" />
                </FormDiv>

                <FormDiv className="form-inputs">
                    <FormLabel htmlFor="produto" className="form-label">
                        Produto:
                    </FormLabel>
                    <FormInput id="produto" type="text" name="produto" className="form-input" placeholder="Produto" value={productData.produto} onChange={handleChange} />
                </FormDiv>

                <FormDiv className="form-inputs">
                    <FormLabel htmlFor="categoria" className="form-label">
                        Categoria:
                    </FormLabel>
                    <FormInput id="categoria" type="text" name="categoria" className="form-input" placeholder="Categoria" value={productData.categoria} onChange={handleChange} />
                </FormDiv>

                <FormDiv className="form-inputs">
                    <FormLabel htmlFor="preco" className="form-label">
                        Preço:
                    </FormLabel>
                    <InputNumerico id="preco" type="text" name="preco" className="form-input" placeholder="R$" value={productData.preco} onChange={handleChange} thousandSeparator={true} prefix={'R$ '} />
                </FormDiv>

                <FormDiv className="form-inputs">
                    <FormLabel htmlFor="quantidade" className="form-label">
                        Quantidade:
                    </FormLabel>
                    <InputNumerico id="quantidade" type="text" name="quantidade" className="form-input" placeholder="Quantidade" value={productData.quantidade} onChange={handleChange} format="######" inputMode="numeric" />
                </FormDiv>

                <DivBotao>
                    <NavLink to="/">
                        <BotaoVoltar className="form-input-btn">VOLTAR</BotaoVoltar>
                    </NavLink>
                    <Botao className="form-input-btn" type="submit">CADASTRAR PRODUTO</Botao>
                </DivBotao>
            </FormProdutos>

            <Creditos class="footer">
                <Credito1 href="https://taiguaracsp.github.io" target="_blank">Website developed by Taiguara Cavaliere</Credito1>
                <Credito2 href="https://www.freepik.com/vectors/design" target="_blank">Design vector created by freepik - www.freepik.com</Credito2>
            </Creditos>

        </Container>
    )
}