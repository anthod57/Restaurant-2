import styled from "styled-components";

export const Container = styled.div`
    position: fixed;
    height: 100vh;
    width: 100%;
    z-index: 100;
    background-color: #000000b0;
    overflow: hidden;
    padding: 1em;   
    display: ${props => props.show ? "flex": "none"};
    align-items: center;
    justify-content: center;
    color: black;


    @media only screen and (min-width: 768px){
        padding: 50px;
    }
`   

export const Wrapper = styled.div`
    width: 100%;
    max-width: 400px;
    height: auto;
    margin: auto;
    background-color: white;
    padding: 1em;
    border-radius: 5px;
    position: relative;

    .close {
        position: absolute;
        right: 1rem;
        top: 1rem;
        width: 30px;
        height: 30px;
        font-size: 2em;
    }

    h3 {
        text-align: center;
        font-size: 2em;
        font-family: 'Dancing Script', cursive;
        margin-bottom: 0.5em;
    }
`

export const Form = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5em;

    span {
        margin: 1em 0;
    }

    .row {
        display: flex;
        justify-content: space-between;
        align-items: center;

        label {
            margin-right: 0.5em;
            width: 150px;
        }
    }

    button {
        width: 100%;
        max-width: 300px;
        align-self: center;
        margin: 1em;
    }

    
    input {
        padding: 0.6rem 1rem;
        background: rgb(255, 255, 255);
        border-radius: 5px;
        width: 100%;
        position: relative;
        overflow: hidden;
        box-shadow: 0 0 1px 1px #bebebe;
        border-bottom: 2px solid #00000080;
    }
`