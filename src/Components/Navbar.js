import React, { useEffect, useState } from 'react'
import { Container, Wrapper, NavLinks, MobileMenuButton, MobileMenu } from '../Styles/StyledNavbar'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'

export const Navbar = (props) => {

    const [offset, setOffset] = useState(0);
    const [showMobileMenu, setShowMobileMenu] = useState(0);

    useEffect(() => {
        const onScroll = () => setOffset(window.pageYOffset);

        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });

        return () => window.removeEventListener('scroll', onScroll);
    }, [])

    return (
        <nav>
            <Container useOpacity={offset} show={showMobileMenu}>
                <Wrapper>
                    <div className="nav-left">
                        <NavLinks>
                            { props.menu.map((item, index) => {
                                if(item.side === "left") return (<a href={item.link} onClick={() => setShowMobileMenu(false)} key={index} id={item.id}><li>{item.text}</li></a>);
                            }) }
                        </NavLinks>
                    </div>

                    <div className="logo">
                        <a href="/"><img src={"/images/logo.png"}></img></a>
                    </div>

                    <div className="nav-right">
                        <NavLinks>
                            { props.menu.map((item, index) => {
                                if(item.side === "right") return (<a href={item.link} onClick={() => setShowMobileMenu(false)} key={index} id={item.id}><li>{item.text}</li></a>);
                            }) }
                        </NavLinks>
                    </div>

                    <MobileMenuButton onClick={() => setShowMobileMenu(!showMobileMenu)}>
                        <FontAwesomeIcon icon={solid("bars")} />
                    </MobileMenuButton>

                    <MobileMenu show={showMobileMenu} useOpacity={showMobileMenu}>
                        <ul>
                            { props.menu.map((item, index) => {
                                if(item.side !== "footer") return (<a href={item.link} onClick={() => setShowMobileMenu(false)} key={index} id={item.id}><li>{item.text}</li></a>);
                            }) }
                        </ul>
                    </MobileMenu>
                </Wrapper>
            </Container>
        </nav>
    )
}