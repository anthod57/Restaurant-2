import React from 'react'
import { Container, Wrapper } from '../Styles/StyledOpeningHours'

export const OpeningHours = (props) => {
    return (
        <section id="horaires">
            <Container>
                <Wrapper>
                    <h2>Horaires</h2>
                    <div className="schedule">
                        {props.schedule.map((day, index) => {
                            return (
                                <div className="row" key={`day-${index}`}>
                                    <span>{day.day}</span>
                                    <span>{`${day.open} - ${day.close}`}</span>
                                </div>
                            )
                        })}
                    </div>
                </Wrapper>
            </Container>
        </section>
    )
}
