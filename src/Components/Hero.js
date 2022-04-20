import React, { useEffect, useState } from 'react'
import { Container, Wrapper, ScrollIcon } from '../Styles/StyledHero';

export const Hero = (props) => {
    return (
        <section id="accueil">
            <Container image={props.bg}>
                <div className="background" />
                <Wrapper>
                    <h1>{props.title}</h1>
                    <p className="hero-text">
                        {props.subTitle}
                    </p>
                    <button onClick={() => props.booking(true)}>{props.buttonText}</button>
                </Wrapper>
                <ScrollIcon></ScrollIcon>
            </Container>
        </section>
    )
}
