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
    text-align: center;


    h2 {
        font-family: 'Dancing Script', cursive;
        line-height: 0.75em;
        margin-bottom: 0.5em;
        font-size: 4em;
    }

    h3 {
        font-weight: 300;
        font-style: italic;
        color: #808080;
    }
`

export const Menus = styled.div`
    margin-top: 5em;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 1em;

    &:after {
        content: "";
        flex: auto;
        max-width: 700px;
        width: 45%;
    }

    @media only screen and (min-width: 768px){
        gap: 1em 10%;
        flex-direction: row;
    }
`

export const MenuItem = styled.div`
    width: 100%;
    height: auto;
    padding-bottom: 10px;
    border-bottom: 1px dotted #DDD;

    .header {
        display: flex;
        justify-content: space-between;
        margin-bottom: 1em;

        h4 {
            font-style: italic;
        }
    }

    .content {
        color: #808080;
        font-weight: 300;
        text-align: left;
    }

    @media only screen and (min-width: 768px){
        max-width: 700px;
        width: 45%;
    }
`