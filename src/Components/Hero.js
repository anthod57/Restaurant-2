import React, { useEffect, useState } from 'react'
import { Container, Wrapper, ScrollIcon } from '../Styles/StyledHero';

export const Hero = (props) => {
    return (
        <section id="accueil">
            <Container image={props.bg}>
                <div className="background" />
                <Wrapper>
                    <h1>Nom du restaurant</h1>
                    <p className="hero-text">
                        Vivez une expérience inoubliable.
                    </p>
                    <button>RÉSERVER</button>
                </Wrapper>
                <ScrollIcon></ScrollIcon>
            </Container>
        </section>
    )
}
