import '../../font.css'
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

export const Menu = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 560px;
    margin: auto;
    padding: 30px 30px 0 30px;
    background-color: #171717;
    border-radius: 25px;
`

export const TextoMenu = styled.p`
    color: #8CE6FF;
    font-family: 'Poppins', sans-serif;
    text-align: center;
    font-size: 1rem;
    margin-bottom: 30px;
`

export const Botao = styled.button`
    padding: 15px;
    margin-bottom: 30px;
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