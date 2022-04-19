import React from 'react'
import { Container, Wrapper, Contact, Navigation } from '../Styles/StyledFooter'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'

export const Footer = (props) => {
    return (
        <footer id="contact">
            <Container>
                <Wrapper>
                    <Contact>
                        <h3>Accès / Contact</h3>
                        {props.address && (
                            <div className="row">
                                <FontAwesomeIcon icon={solid("location-dot")} />
                                <span>{props.address}</span>
                            </div>
                        )}
                        {props.phone && (
                            <div className="row">
                                <FontAwesomeIcon icon={solid("phone")} />
                                <a href={`tel:${props.phone}`}><span>{props.phone}</span></a>
                            </div>
                        )}
                        <div className="social-medias">
                            {props.facebook && (<a href={props.facebook}><FontAwesomeIcon icon={brands("facebook")} /></a>)}
                            {props.twitter && (<a href={props.twitter}><FontAwesomeIcon icon={brands("twitter")} /></a>)}
                            {props.instagram && (<a href={props.instagram}><FontAwesomeIcon icon={brands("instagram")} /></a>)}
                        </div>
                    </Contact>
                    <Navigation>
                        <h3>Navigation</h3>
                        <ul>
                            {props.menu.map((item, index) => {
                                if(item.side !== "footer") return(<a href={item.link} key={index}><li>{item.text}</li></a>)
                            })}
                        </ul>
                    </Navigation>
                </Wrapper>
                <div className="bottom">
                        <div className="copyright">
                        ©2022 RESTAURANT — SITE CRÉE PAR <a href="https://anthonydragun.fr/">AD</a>
                        </div>
                        <div className="others">
                            <ul>
                                {props.menu.map((item, index) => {
                                    if(item.side === "footer") return(<a href={item.link} key={index}><li>{item.text}</li></a>)
                                })}
                            </ul>
                        </div>
                    </div>
            </Container>
        </footer>
    )
}
