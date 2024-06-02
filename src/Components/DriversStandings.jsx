import React from "react";
import styled from 'styled-components'
import Leclerc from '../Images/charles-leclerc.png'
import Norris from '../Images/lando-norris.png'
import Max from '../Images/max-verstappen.png'

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

const DriverImage = styled.img`
    width: ${({middle}) => middle ? '28rem' : '20rem'};
    height: ${({middle}) => middle ? '22rem' : '15rem'};
    position: absolute;
    top: ${({middle}) => middle ? '-20px' : '0'};
    bottom: 0;
    right: 0;
    left: ${({middle}) => middle ? '-65px' : '-40px'};
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


const DriversStandings = () => {
    return(
        <DriversContainer>
            <DriversSubtitle>Drivers</DriversSubtitle>
            <DriversTitle>2024 Standings</DriversTitle>
            <DriversStats>
                <Driver>
                    <DriverRank>02</DriverRank>
                    <DriverBubble className="red-bubble">
                        <DriverImage src={Leclerc} alt='Leclerc Image' />
                    </DriverBubble>
                    <DriverCountry>🇲🇨</DriverCountry>
                    <DriverName>Charles</DriverName>
                    <DriverSurname>Leclerc</DriverSurname>
                    <DriverPoints>138 Pts</DriverPoints>
                </Driver>
                <Driver>
                    <DriverRank middle>01</DriverRank>
                    <DriverBubble middle className="red-bubble">
                        <DriverImage middle src={Max} alt='Leclerc Image' />
                    </DriverBubble>
                    <DriverCountry>🇳🇱</DriverCountry>
                    <DriverName>Max</DriverName>
                    <DriverSurname middle>Verstappen</DriverSurname>
                    <DriverPoints>169 Pts</DriverPoints>
                </Driver>
                <Driver>
                    <DriverRank>03</DriverRank>
                    <DriverBubble className="red-bubble">
                        <DriverImage src={Norris} alt='Leclerc Image' />
                    </DriverBubble>
                    <DriverCountry>🇬🇧</DriverCountry>
                    <DriverName>Lando</DriverName>
                    <DriverSurname>Norris</DriverSurname>
                    <DriverPoints>113 Pts</DriverPoints>
                </Driver>
            </DriversStats>
            <StandingsButton>View Full</StandingsButton>
        </DriversContainer>
    )
}

export default DriversStandings