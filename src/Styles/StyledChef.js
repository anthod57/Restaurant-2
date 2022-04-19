import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: auto;
    min-height: 500px;
    position: relative;
    text-align: center;
    background-color: black;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-image: ${props => props.image ? `url(${props.image})` : ""};
`

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    min-height: 500px;
    margin: auto;
    padding: 0 1em;
    padding-bottom: 2em;
    padding-top: 140px;
    overflow: hidden;

    .content {
        max-width: 1100px;
        margin: auto;
        h2 {
            font-family: 'Dancing Script', cursive;
            line-height: 0.75em;
            margin-bottom: 1em;
            font-size: 4em;
        }
    }

    @media only screen and (min-width: 768px){
        padding: 0px 140px;
        padding-bottom: 2em;
        padding-top: 140px;
    }

`