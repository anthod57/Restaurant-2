import React from 'react'
import { Container, Wrapper } from '../Styles/StyledChef'

export const Chef = (props) => {
    return (
        <section id="chef">
            <Container image={props.bg}>
                <div className="background"></div>
                <Wrapper>
                    <div className="content">
                        <h2>{props.data.displayName}</h2>
                        <p>{props.data.description}</p>
                    </div>
                </Wrapper>
            </Container>
        </section>
    )
}
