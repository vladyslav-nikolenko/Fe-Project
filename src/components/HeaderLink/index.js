import React from 'react';

import { StyledHeaderNavigationItem } from './index.style';

function HeaderLink({ index, url, label,handlerLink }) {

    return (
        <StyledHeaderNavigationItem
            onClick={handlerLink}
            key={index}
            to={url}>{label}
        </StyledHeaderNavigationItem>
    );
}

export default HeaderLink;
