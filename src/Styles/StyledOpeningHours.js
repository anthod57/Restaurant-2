import styled from "styled-components";

export const Container = styled.div`
    height: auto;
    width: 100%;
    color: black !important;
    padding: 2em;
    padding-top: 140px;
    background-color: white;

    @media only screen and (min-width: 768px){
        padding: 140px;
    }
`

export const Wrapper = styled.div`
    height: 100%;
    width: 100%;
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;


    h2 {
        font-family: 'Dancing Script', cursive;
        line-height: 0.75em;
        margin-bottom: 1em;
        font-size: 4em;
    }

    .schedule {
        max-width: 1100px;
        margin: auto;
        width: 100%;

        .row {
            display: flex;
            justify-content: space-between;
            max-width: 300px;
            margin: auto;
            margin: 1em auto;
        }
    }
`
