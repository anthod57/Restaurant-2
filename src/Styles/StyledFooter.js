import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: auto;
    background-color: black;
    padding: 1em;
    display: flex;
    flex-direction: column;

    a {
        color: white;
        text-decoration: none;
    }

    .bottom {
        width: 100%;
        text-align: center;
        font-size: 0.8em;

        .copyright {
            a {
                text-decoration: underline;
            }
        }

        ul {
            list-style: none;
            margin: 0;
            padding: 0;
            overflow: hidden;
            font-size: 0.9em;
            margin-block-start: 0;
            margin-block-end: 0;
            padding-inline-start: 0px;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;

            a {
                float: left;
                color: #808080;

                li {
                    margin: 0.5em;  
                }
            }
        }
    }
`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 100%;

    @media only screen and (min-width: 768px){
        flex-direction: row;
        max-width: 1100px;
        margin: auto;
        justify-content: space-evenly;
        text-align: unset;
    }

    h3 {
        margin-bottom: 1em;
    }
`

export const Contact = styled.div`
    margin-bottom: 1em;
    .row {
        margin: 0.5em 0;
        font-size: 0.9em;

        svg {
            width: 20px;
            padding-right: 5px;
        }
    }

    .social-medias {
        a {
            margin-right: 0.5em;

            svg {
                font-size: 1.25em;
            }
        }
    }

    @media only screen and (min-width: 768px){
        margin-bottom: 0;
    }
`

export const Navigation = styled.div`
    margin-bottom: 2em;

    ul {
        list-style: none;
        margin: 0;
        padding: 0;
        overflow: hidden;
        font-size: 0.9em;
        margin-block-start: 0;
        margin-block-end: 0;
        padding-inline-start: 0px;
    }
`