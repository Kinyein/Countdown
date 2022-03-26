import React from 'react'
import patternHills from '../img/pattern-hills.svg'
import { FooterDivImg, FooterIcons, Icon } from '../styledComp/footer'
import "../stylesCss/footerCss.css"

const Footer = () => {
    return (
        <div>
            <FooterDivImg>
                <FooterIcons>
                    <ion-icon name="logo-facebook"></ion-icon>
                    <ion-icon name="logo-pinterest"></ion-icon>
                    <ion-icon name="logo-instagram"></ion-icon>
                </FooterIcons>
                
                <img src={patternHills} alt="patternHills" width="100%" />
            </FooterDivImg>
        </div>
    )
}

export default Footer