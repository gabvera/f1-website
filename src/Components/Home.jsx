import React from "react";
import styled from 'styled-components'
import Image from '../Images/formula-1.jpeg'
import Header from "./Header";
import Circuit from '../Images/circuit.png'

const HomeContainer = styled.div`
    height: 90vh;
    width: 100%;
    background-image: url(${Image});
    background-size: cover;
    background-position: bottom;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        height: 90vh;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 1;
    }
`

const HeroComponent = styled.div`
    width: 100%;
    margin-top: 2rem;
    padding-left: 4rem;
    padding-right: 4rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    color: white;
`

const HeroText = styled.div`
    z-index: 3;
    color: white;
    width: 44%
`

const HeroSubtitle = styled.div`
    font-size: 1.4rem;
    text-transform: uppercase;
`

const HeroTitle = styled.div`
    font-size: 3rem;
    z-index: 10;
    font-weight: bold;
    margin-top: 1rem;
`

const HeroButton = styled.button`
    margin-top: 2rem;
    font-size: 1rem;
    background-color: transparent;
    border: 1px solid white;
    color: white;
    padding: 1rem 2rem;
    border-radius: 10px;
    transition: background-color 0.3s ease-in;
    cursor: pointer;
`

const CircuitComponent = styled.div`
    z-index: 3;
    color: white;
    background-color: rgba(0, 0, 0, 0.3);
    padding: 2rem 4rem;
`

const CircuitImage = styled.img`
    margin-top: 1rem;
    width: 15rem
`

const CircuitName = styled.div`
    margin-top: 1rem;
`

const CircuitTimeComponent = styled.div`
    margin-top: 1rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    text-align:
    gap: 1rem;
    font-size: 1rem
`

const CircuitTime = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    align-items: center;
`

const CircuitTimeNumber = styled.div`
    font-size: 2rem;
    font-weight: bold;
`

const CircuitTimeTitle = styled.div`
    color: grey;
`

const CircuitTimeButton = styled.div`
    padding: 0.6rem 1rem;
    background-color: white;
    color: black;
    border-radius: 10px;
`

const CircuitTimeText = styled.div`
    font-size: 0.8rem;
`

const CircuitButton = styled.div`
    margin-top: 1.4rem;
    display: flex;
    justify-content: center;
    align-center: center;
`


const Home = () => {
    return(
        <HomeContainer>
            <Header subscribe/>
            <HeroComponent>
                <HeroText>
                    <HeroSubtitle>Race Weekend 🇲🇨</HeroSubtitle>
                    <HeroTitle>Home glory for Leclerc as he controls Monaco Grand Prix to win for Ferrari from Piastri and Sainz</HeroTitle>
                    <HeroButton>&#9873; View Schedule</HeroButton>
                </HeroText>
                <CircuitComponent>
                    <div>&#8599; Circuit Stats</div>
                    <CircuitImage src={Circuit} alt="" />
                    <CircuitName>GRAND PRIX DE MONACO 2024</CircuitName>
                    <CircuitTimeComponent>
                        <CircuitTime>
                            <CircuitTimeTitle>TIME</CircuitTimeTitle>
                            <CircuitTimeNumber>19</CircuitTimeNumber>
                            <CircuitTimeButton>Mar</CircuitTimeButton>
                            <CircuitTimeText>Race</CircuitTimeText>
                        </CircuitTime>
                        <CircuitTime>
                            <CircuitTimeTitle>TIME</CircuitTimeTitle>
                            <CircuitTimeNumber>19</CircuitTimeNumber>
                            <CircuitTimeButton>Mar</CircuitTimeButton>
                            <CircuitTimeText>Qualify</CircuitTimeText>
                        </CircuitTime>
                        <CircuitTime>
                            <CircuitTimeTitle>TIME</CircuitTimeTitle>
                            <CircuitTimeNumber>19</CircuitTimeNumber>
                            <CircuitTimeButton>Mar</CircuitTimeButton>
                            <CircuitTimeText>Practice</CircuitTimeText>
                        </CircuitTime>
                    </CircuitTimeComponent>
                    <CircuitButton>See more &rarr;</CircuitButton>
                </CircuitComponent>
            </HeroComponent>
        </HomeContainer>
    )
}

export default Home