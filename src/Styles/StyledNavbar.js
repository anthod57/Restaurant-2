import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    background-color: ${props => props.useOpacity > 0 || props.show ? "black" : "#00000040"};
    height: 100px;
    position: fixed;
    z-index: 10;
    transition: all 0.5s;

    a {
        text-decoration: none;
        color: white;
        transition: all 0.25s;

        &:hover {
            color: #fdc921;
        }
    }
`

export const Wrapper = styled.div`
    margin: auto;
    height: 100%;
    display: flex;
    justify-content: space-between;

    .nav-left {
        display: none;
    }

    .logo {
        flex-shrink: 1;
        margin: 0 1em;
        max-width: 200px;

        img {
            object-fit: contain;
            height: 100%;
        }
    }

    .nav-right {
        display: none;
    }

    
    @media only screen and (min-width: 768px){
        .nav-left {
            height: 100%;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: flex-end;
        }

        .nav-right {
            height: 100%;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: flex-start;
        }
    }
`

export const NavLinks = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    overflow: hidden;

    a {
        margin: 1em;
        float: left;
    }
`

export const MobileMenuButton = styled.div`
    width: 80px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    
    svg {
        width: 40px;
        height: auto;
    }

    @media only screen and (min-width: 768px){
        display: none;
    }
`

export const MobileMenu = styled.div`
    position: absolute;
    margin-top: 100px;
    right: ${props => props.show ? "0px" : "-60%"};
    width: 60%;
    height: calc(100vh - 100px);
    background-color: ${props => props.useOpacity ? "black" : "#00000040"};
    transition: all 0.5s;

    ul {
        list-style: none;
        margin: 0;
        padding: 0;
        overflow: hidden;
        width: 100%;

        a {
            text-align: center;

            li {
                margin: 1em;
            }
        }
    }

    @media only screen and (min-width: 768px){
        display: none;
    }
`;