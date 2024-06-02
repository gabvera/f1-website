import React from "react";
import styled from 'styled-components'
import Spain from '../Images/spain.jpeg'
import Indonesia from '../Images/indonesia.jpeg'
import Zanzibar from '../Images/zanzibar.jpeg'
import Italy from '../Images/italy.jpeg'
import Qatar from '../Images/qatar.jpeg'

const RacesContainer = styled.div`
    padding: 1rem 4rem;
    color: rgb(128, 128, 128);
    width: 100%;
    background-color: rgba(44,44,44,255);
`

const RacesImagesContainer = styled.div`
    margin-top: 1rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

const RacesImageComponent = styled.div`
    width: 12rem;
    height: 6rem;
    background-image: url(${props => props.url});
    background-size: cover;
    background-position: center;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        border-radius: 10px;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 1;
    }
`

const RacesImageCountry = styled.div`
    color: white;
    z-index: 3;
    font-size: 1.2rem;
`

const Races = ({image}) => {
    return(
        <RacesContainer>
            <h3>Upcoming Races</h3>
            <RacesImagesContainer>
                <RacesImageComponent url={Spain}>
                    <RacesImageCountry>Spain</RacesImageCountry>
                </RacesImageComponent>
                <RacesImageComponent url={Indonesia}>
                    <RacesImageCountry>Indonesia</RacesImageCountry>
                </RacesImageComponent>
                <RacesImageComponent url={Zanzibar}>
                    <RacesImageCountry>Zanzibar</RacesImageCountry>
                </RacesImageComponent>
                <RacesImageComponent url={Italy}>
                    <RacesImageCountry>Italy</RacesImageCountry>
                </RacesImageComponent>
                <RacesImageComponent url={Qatar}>
                    <RacesImageCountry>Qatar</RacesImageCountry>
                </RacesImageComponent>
            </RacesImagesContainer>
        </RacesContainer>
    )
}

export default Races