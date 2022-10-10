// react
import React from 'react';
import { createRoot } from 'react-dom/client';

// css
import '@styles/mobile.scss';

// ui
import { MobileHeader, MobileFooter } from 'qiao-ui';

// dishi
import { DishiListMobile } from '@components/dishi';

// util
import { infoLog } from '@utils/log.js';

// constant
import Constant from '../_constant.js';

/**
 * dishi index mobile view
 */
const DishiIndexMobileView = () => {
    infoLog('dishi-web/dishi-index-mobile-view: render');

    return (
        <div className='container'>
            <MobileHeader
                logo={Constant.logo}
                logoUrl={Constant.logoUrl}
                navs={Constant.navs}
            />

            <DishiListMobile />

            <MobileFooter
                companyUrl={Constant.companyUrl}
                companyName={Constant.companyName}
                beianUrl={Constant.beianUrl}
                beianName={Constant.beianName}
            />
        </div>
    );
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<DishiIndexMobileView />);