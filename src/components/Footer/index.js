import React from 'react';

import {
    FooterStyled,
    IconHeart,
    IconContainer,
    Text,
    TextContainer
} from './index.style';

function Footer() {
    return (
        <FooterStyled>
            <Text>© 2022 | All Rights Reserved |</Text>
            <TextContainer>
            <IconContainer>
                <Text>Developed with</Text>
                <IconHeart />
            </IconContainer>
                <Text>by Wroclaw Mastery Team</Text>
                </TextContainer>
        </FooterStyled>
    );
};

export default Footer;
