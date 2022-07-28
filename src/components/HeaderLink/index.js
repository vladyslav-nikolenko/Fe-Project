import React from 'react';

import { HeaderNavigationItem } from './index.style';

function HeaderLink({ index, url, label }) {

    return (
        <HeaderNavigationItem
            key={index}
            to={url}>{label}
        </HeaderNavigationItem>
    );
}

export default HeaderLink;
