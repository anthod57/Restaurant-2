import styled, { keyframes } from "styled-components";

export const ScrollAnimation = keyframes`
    0% {
        opacity: 1;
    }

    75% {
        opacity: 0;
        transform: translateY(46px);
    }

    100% {
        opacity: 0;
        transform: translateY(46px);
    }
`

export const Container = styled.div`
    height: 100vh;
    width: 100%;
    .background {
        width: 100%;
        height: 100vh;
        position: absolute; 
        overflow: hidden;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        background-image: ${props => props.image ? `url(${props.image})` : ""};
        filter: brightness(0.8);
    }
`

export const Wrapper = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;

    h1 {
        font-family: 'Dancing Script', cursive;
        line-height: 0.75em;
        margin-bottom: 1em;
        font-size: 4em;
    }

    .hero-text {
        font-size: 1.5em;
        margin-bottom: 0.5em;
        font-style: italic;
    }

    @media only screen and (min-width: 768px){

    }
`

export const ScrollIcon = styled.div`
    position: absolute;
    left: 50%;
    width: 40px;
    height: 70px;
    margin-left: -20px;
    bottom: 5%;
    margin-top: -35px;
    box-shadow: inset 0 0 0 1px #fff;
    border-radius: 25px;
    opacity: 0.2;

    &:before {
        position: absolute;
        left: 50%;
        content: '';
        width: 8px;
        height: 8px;
        background: #fff;
        margin-left: -4px;
        top: 8px;
        border-radius: 4px;
        animation-duration: 2.5s;
        animation-iteration-count: infinite;
        animation-name: ${ScrollAnimation};
    }

    @media only screen and (max-width: 767px){
        display: none;
    }
`