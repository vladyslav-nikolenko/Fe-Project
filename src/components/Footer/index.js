import React from 'react';
import cn from 'classnames';

import style from './styles/index.module.css';

function Footer() {

    return (
        <div className={cn(style.footer)}>
            <div className={cn(style.footerContent)}>
                <p>© 2022 | All Rights Reserved | Developed by Wroclaw Mastery Team</p>
            </div>
        </div>
    );
}

export default Footer;
