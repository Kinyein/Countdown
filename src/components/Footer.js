import React from 'react'
import patternHills from '../img/pattern-hills.svg'
import { FooterDivImg, FooterIcons, Icon, ImgFooter, LinkSocial } from '../styledComp/footer'
import "../stylesCss/footerCss.css"

const Footer = () => {
    return (
        <div>
            <FooterIcons>
                <LinkSocial href="https://github.com/Kinyein/Countdown/tree/master/src" target="_blank"><ion-icon name="logo-facebook"></ion-icon></LinkSocial>
                <LinkSocial href="https://github.com/Kinyein/Countdown/tree/master/src" target="_blank"><ion-icon name="logo-pinterest"></ion-icon></LinkSocial>
                <LinkSocial href="https://github.com/Kinyein/Countdown/tree/master/src" target="_blank"><ion-icon name="logo-instagram"></ion-icon></LinkSocial>
            </FooterIcons>

            <FooterDivImg src={patternHills} alt="patternHills" width="100%" />

        </div>
    )
}

export default Footer