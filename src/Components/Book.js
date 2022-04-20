import React, { useEffect, useState } from 'react'
import { Container, Wrapper, Form } from '../Styles/StyledBook'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'

export const Book = (props) => {

    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [phone, setPhone] = useState(null);
    const [numberOfPersons, setNumberOfPersons] = useState(0);
    const [date, setDate] = useState(null);

    useEffect(() => {

    }, [])

    return (
        <Container show={props.show}>
            <Wrapper>
                <h3>Réserver</h3>
                <div className="close" onClick={() => { props.setShow(false); }}>
                    <FontAwesomeIcon icon={solid("xmark")} />
                </div>
                <Form>  
                    <span>Tables disponibles: 0</span>

                    <div className="row">
                        <label htmlFor="lastName">Nom:</label>
                        <input type="text" id="lastName" onChange={(e) => setLastName(e.target.value)}></input>
                    </div>
                    <div className="row">
                        <label htmlFor="firstName">Prénom:</label>
                        <input type="text" id="firstName" onChange={(e) => setFirstName(e.target.value)}></input>
                    </div>
                    <div className="row">
                        <label htmlFor="phone">Téléphone:</label>
                        <input type="tel" id="phone" onChange={(e) => setPhone(e.target.value)}></input>
                    </div>
                    <div className="row">
                        <label htmlFor="date">Date:</label>
                        <input type="datetime-local" id="date" onChange={(e) => setDate(e.target.value)}></input>
                    </div>
                    <div className="row">
                        <label htmlFor="numberOfPersons">Personnes:</label>
                        <input type="number" id="numberOfPersons" defaultValue="1" min="1" max="10" onChange={(e) => setNumberOfPersons(e.target.value)}></input>
                    </div>
                    <button>Réserver</button>
                </Form>
            </Wrapper>
        </Container>
    )
}
