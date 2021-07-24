import NumberFormat from "react-number-format";
import styled from "styled-components";

export const Container = styled.div`
    background-color: #d9f7ff;
    padding-bottom: 30px;
`

export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 30px;
    color: #171717;
`
export const LogoImg = styled.img`
    width: 10%;
    margin-right: 30px;
`

export const FormProdutos = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 560px;
    margin: auto;
    padding: 30px;
    background-color: #171717;
    border-radius: 25px;
`

export const FormDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const DivBotao = styled.div`
    width: 500px;
    margin-top: 15px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const FormLabel = styled.label`
    display: inline-block;
    font-size: 1.25rem;
    color: #8CE6FF;
`

export const FormInput = styled.input`
    width: 500px;
    padding: 10px;
    border: 2px solid transparent;
    border-radius: 50px;
    text-align: center;
    color: #171717;
    outline-style: none;
    margin-bottom: 15px;

    ::placeholder{
        text-align: center;
        color: #171717;
    }
`

export const InputNumerico = styled(NumberFormat)`
    width: 500px;
    padding: 10px;
    border: 2px solid transparent;
    border-radius: 50px;
    text-align: center;
    color: #171717;
    outline-style: none;
    margin-bottom: 15px;

    ::placeholder{
        text-align: center;
        color: #171717;
    }
`

export const BotaoVoltar = styled.button`
    padding: 15px;
    width: 15rem;
    font-weight: 600;
    font-size: 1.16rem;
    border-radius: 50px;
    border: 1px solid transparent;
    background-color: #ADC5CC;
    

    :hover{
        cursor: pointer;
        filter: brightness(1.1)
    }
`

export const Botao = styled.button`
    padding: 15px;
    width: 15rem;
    font-weight: 600;
    font-size: 1.16rem;
    border-radius: 50px;
    border: 1px solid transparent;
    background-color: #8CE6FF;
    

    :hover{
        cursor: pointer;
        filter: brightness(1.1)
    }
`

export const Creditos = styled.footer`
    max-width: 560px;
    margin: 10px auto;
    text-align: center;
`

export const Credito1 = styled.a`
    text-decoration: none;
    font-size: 10px;
    font-weight: 600;
    color: #414B4E;
    display: flex;
    justify-content: center;

    :active{
        text-decoration: none;
    }
`

export const Credito2 = styled.a`
    text-decoration: none;
    font-size: 10px;
    color: #414B4E;
    display: flex;
    justify-content: center;

    :active{
        text-decoration: none;
    }
`