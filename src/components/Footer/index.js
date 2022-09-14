import React from 'react';

import {
    StyledFooter,
    FooterText,
    TextContainer,
    IconContainer,
    IconHeart
} from './index.style';

function Footer() {
    return (
        <StyledFooter>
            <FooterText>© 2022 | All Rights Reserved |</FooterText>
                <TextContainer>
                    <IconContainer>
                        <FooterText>Developed with</FooterText>
                        <IconHeart />
                    </IconContainer>
                    <FooterText></FooterText>
                </TextContainer>
        </StyledFooter>
    );
};

export default Footer;
