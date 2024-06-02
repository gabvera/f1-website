import React from "react";
import styled from 'styled-components'
import Logo from '../Images/logo.png'

const HeaderComponent = styled.div`
    width: 100%;
    padding-top: 1rem;
    padding-bottom: 1rem;
    padding-left: 4rem;
    padding-right: 4rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

const HeaderLinks = styled.div`
    display: flex;
    font-size: 1.2rem;
    gap: 3rem;
    z-index: 2;
    color: white;
    cursor: pointer;
`
const HeaderLink = styled.div`
    display: inline-block;
    border-bottom: 2px solid transparent;
    transition: border-bottom 0.3s ease-in-out;
    &:hover{
        border-bottom: 2px solid white;
    }
`

const HeaderLogo = styled.img`
    border-bottom: 2px solid transparent;
    width: 6rem;
`

const HeaderButtons = styled.div`
    display: flex;
    gap: 1rem;
    z-index: 2;
    cursor: pointer;
`
const HeaderButton = styled.div`
    background-color: ${({subscribe}) => subscribe ? 'white' : 'red'};
    color: ${({subscribe}) => subscribe ? 'black' : 'white'};
    text-transform: uppercase;
    padding: 1rem 2rem;
    font-size: 1.2rem;
    gap: 1rem;
    border-radius: 10px;
    transition: background-color 0.3s ease-in;
    &:hover {
        background-color: ${({ subscribe }) => (subscribe ? 'lightgray' : 'darkred')}; /* Change hover color based on subscribe prop */
      }
`


const Header = ({subscribe}) => {
    return(
        <HeaderComponent>
            <HeaderLinks>
                <HeaderLogo src={Logo} />
                <HeaderLink>Latest</HeaderLink>
                <HeaderLink>Article</HeaderLink>
                <HeaderLink>Standings</HeaderLink>
                <HeaderLink>More</HeaderLink>
            </HeaderLinks>
            <HeaderButtons>
                <HeaderButton>Sign In</HeaderButton>
                <HeaderButton subscribe={subscribe.toString()}>Subscribe</HeaderButton>
            </HeaderButtons>
        </HeaderComponent>
    )
}

export default Header