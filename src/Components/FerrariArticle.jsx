import React from "react";
import styled from 'styled-components'
import FerrariLogoImg from '../Images/ferrari-logo.png'
import FerrariCarImg from '../Images/FerrariCar.png'


const ArticleContainer = styled.div`
    padding: 1rem 4rem;
    padding-top: 6rem;
    padding-bottom: 2rem;
    color: white;
    width: 100%;
    background-color: rgba(44,44,44,255);
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
`

const MainTitle = styled.h2`
    font-size: 18rem;
`

const Subtitle = styled.h3`
    font-size: 6rem;
    top: 6rem;
    position: absolute;
`

const FerrariCar = styled.img`
    position: absolute;
    top: 12rem;
    width: 50rem;
    transform: rotate(-9deg)
`
const FerrariLogo = styled.img`
    position: absolute;
    top: 4rem;
    width: 2rem;
`

const ArticleText = styled.div`
    margin-top: 8rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    text-align: center;
`

const ArticleFeatured = styled.div`
    color: red;
    font-size: 1.2rem;
    font-weight: bolder;
`

const ArticleTitle = styled.div`
    font-size: 3rem;
    font-weight: bold;
`

const ArticleParagraph = styled.div`
    color: grey;
`

const ArticleButton = styled.div`
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


const FerrariArticle = () => {
    return(
        <ArticleContainer>
            <Subtitle>Scuderia</Subtitle>
            <MainTitle>Ferrari</MainTitle>
            <FerrariLogo src={FerrariLogoImg}/>
            <FerrariCar src={FerrariCarImg}/>
            <ArticleText>
                <ArticleFeatured>Featured</ArticleFeatured>
                <ArticleTitle>Pushing boundaries with Ferrari Scuderia, where tradition meets cutting-edge technology in Formula 1</ArticleTitle>
                <ArticleParagraph>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto magni voluptatibus quae hic esse dolores, veritatis repellendus temporibus recusandae porro nemo deserunt fugit ad repudiandae rerum quam reprehenderit excepturi saepe tempora, impedit officiis! Ducimus nihil laboriosam molestias quod, ab deserunt molestiae itaque! Explicabo voluptas ipsam optio, expedita iure assumenda animi.</ArticleParagraph>
                <ArticleButton>Read Article</ArticleButton>
            </ArticleText>
        </ArticleContainer>
    )
}

export default FerrariArticle