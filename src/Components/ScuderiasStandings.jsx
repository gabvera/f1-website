import React from "react";
import styled from 'styled-components'
import FerrariImg from '../Images/ferrari-logo.png'
import McLarenImg from '../Images/mclaren.png'
import RedbullImg from '../Images/redbull.png'


const DriversContainer = styled.div`
    padding: 3rem 4rem;
    color: white;
    width: 100%;
    background-color: rgba(44,44,44,255);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
`

const DriversSubtitle = styled.div`
    color: red;
    font-size: 1.2rem;
    font-weight: bold;
`

const DriversTitle = styled.div`
    font-size: 3rem;
    font-weight: bold;
`

const DriversStats = styled.div`
    margin-top: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    text-align: center;
    gap: 2rem;
`

const DriverBubble = styled.div`
    width: ${({middle}) => middle ? '20rem' : '15rem'};
    height: ${({middle}) => middle ? '20rem' : '15rem'};
    border-radius: 100%;
    background-color: grey;
    position: relative;
    overflow: hidden
`

const FerrariImage = styled.img`
    width: 10rem;
    height: 10rem;
    position: absolute;
    top: 2.8rem;
    left: 2.5rem;
`

const McLarenImage = styled.img`
    width: 12rem;
    height: 5rem;
    position: absolute;
    top: 4.5rem;
    left: 1.5rem;
`

const RedbullImage = styled.img`
    width: 20rem;
    height: 10rem;
    position: absolute;
    top: 4rem;
    right: 0.3rem;
`

const Driver = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
`

const DriverCountry = styled.div`
    margin-top: 1rem;
    font-size: 2rem
`

const DriverName = styled.div`
    font-size: 1.2rem
`

const DriverSurname = styled.div`
    font-weight: bold;
    margin-top: 1rem;
    font-size: ${({middle}) => middle ? '2.6rem' : '2rem'};
`

const DriverPoints = styled.div`
    margin-top: 10px;
    font-size: 1.2rem;
    color: grey;
`

const StandingsButton = styled.div`
    margin-top: 10px;
    cursor: pointer;
    background-color: red;
    color: white;
    text-transform: uppercase;
    padding: 1rem 2rem;
    font-size: 1.2rem;
    border-radius: 10px;
    transition: background-color 0.3s ease-in;
    &:hover {
        background-color: darkred
    }
`

const DriverRank = styled.div`
    position: absolute;
    z-index: 3;
    background-color: red;
    top: ${({middle}) => middle ? '2rem' : '1rem'};
    left: ${({middle}) => middle ? '0rem' : '-1rem'};
    border-radius: 100%;
    color: white;
    font-size: 2rem;
    width: 71px;
    height: 71px;
    display: flex;
    text-align: center; 
    align-items: center;
    justify-content: center;
`


const ScuderiasStandings = () => {
    return(
        <DriversContainer>
            <DriversSubtitle>Constructors</DriversSubtitle>
            <DriversTitle>2024 Standings</DriversTitle>
            <DriversStats>
                <Driver>
                    <DriverRank>02</DriverRank>
                    <DriverBubble className="red-bubble">
                        <FerrariImage src={FerrariImg} alt='Leclerc Image' />
                    </DriverBubble>
                    <DriverSurname>Ferrari</DriverSurname>
                    <DriverPoints>252 Pts</DriverPoints>
                </Driver>
                <Driver>
                    <DriverRank middle>01</DriverRank>
                    <DriverBubble middle className="red-bubble">
                        <RedbullImage middle src={RedbullImg} alt='Leclerc Image' />
                    </DriverBubble>
                    <DriverSurname middle>Red Bull</DriverSurname>
                    <DriverPoints>276 Pts</DriverPoints>
                </Driver>
                <Driver>
                    <DriverRank>03</DriverRank>
                    <DriverBubble className="red-bubble">
                        <McLarenImage src={McLarenImg} alt='Leclerc Image' />
                    </DriverBubble>
                    <DriverSurname>McLaren</DriverSurname>
                    <DriverPoints>184 Pts</DriverPoints>
                </Driver>
            </DriversStats>
            <StandingsButton>View Full</StandingsButton>
        </DriversContainer>
    )
}

export default ScuderiasStandings