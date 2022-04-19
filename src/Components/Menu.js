import React from 'react'
import { Container, Wrapper, Menus, MenuItem } from '../Styles/StyledMenu'

export const Menu = (props) => {
    return (
        <section id="menu">
            <Container>
                <Wrapper>
                    <h2>Menu</h2>
                    <h3>Nos plats les plus populaires</h3>
                    <Menus>
                        {props.dishes.map((dish, index) => {
                            return(
                                <MenuItem key={`dish-${index}`}>
                                    <div className="header">
                                        <h4>{dish.title}</h4>
                                        <span>{dish.price}</span>
                                    </div>
                                    <div className="content">
                                        {dish.description}
                                    </div>
                                </MenuItem>
                            )
                        })}
                    </Menus>
                </Wrapper>
            </Container>
        </section>
    )
}
