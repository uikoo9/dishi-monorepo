// react
import React from 'react';
import { createRoot } from 'react-dom/client';

// css
import '@styles/index/pc.scss';

// ui
import {
    Header,
    Footer,
    Content,
    Cards,
} from 'qiao-ui';

// dishi
import { DishiCards } from '@components/index/dishi-cards.jsx';

// util
import { infoLog } from '@utils/log.js';

// constant
import Constant from '../_constant.js';

/**
 * index pc view
 */
const IndexPCView = () => {
    infoLog('insistime-web/index-pc-view: render');

    return (
        <div className="container">
            <Header
                logo={Constant.logo}
                logoUrl={Constant.logoUrl}
                navs={Constant.navs}
            />
            <Content
                contentName={Constant.contentName}
                contentSolgan={Constant.contentSolgan}
            />
            <Cards
                cards={DishiCards()}
            />
            <Footer
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
root.render(<IndexPCView />);