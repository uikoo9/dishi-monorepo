// react
import React from 'react';
import { createRoot } from 'react-dom/client';

// css
import '@styles/index/mobile.scss';

// ui
import {
    MobileHeader,
    MobileFooter,
    MobileContent,
    MobileCards,
} from 'qiao-ui';

// dishi
import { DishiCards } from '@components/index/dishi-cards.jsx';

// util
import { infoLog } from '@utils/log.js';

// constant
import Constant from '../_constant.js';

/**
 * index mobile view
 */
const IndexMobileView = () => {
    infoLog('insistime-web/index-mobile-view: render');

    return (
        <div className="container">
            <MobileHeader
                logo={Constant.logo}
                navs={Constant.navs}
                center={true}
            />
            <MobileContent
                contentName={Constant.contentName}
                contentSolgan={Constant.contentSolgan}
            />
            <MobileCards
                cards={DishiCards()}
            />
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
root.render(<IndexMobileView />);