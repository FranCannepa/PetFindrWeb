import React from 'react'
import { FooterRight, ContentContainer, FooterContainer, FooterLeft, FooterLink, FooterLinkItem, FooterLinks } from './CommonElements/CommonElements';

const Footer = () => {
    return (
        <FooterContainer>
            <ContentContainer>
                <FooterLeft>
                    <p>&copy; {new Date().getFullYear()} PetFindr. All rights reserved.</p>
                </FooterLeft>
                <FooterRight>
                    <FooterLinks>
                        <FooterLinkItem><FooterLink href="/">Home</FooterLink></FooterLinkItem>
                        <FooterLinkItem><FooterLink href="/about">About</FooterLink></FooterLinkItem>
                        <FooterLinkItem><FooterLink href="/services">Services</FooterLink></FooterLinkItem>
                        <FooterLinkItem><FooterLink href="/contact">Contact</FooterLink></FooterLinkItem>
                    </FooterLinks>
                </FooterRight>
            </ContentContainer>
        </FooterContainer>
    );
};

export default Footer;