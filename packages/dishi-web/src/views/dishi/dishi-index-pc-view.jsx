// react
import React from 'react';
import { createRoot } from 'react-dom/client';

// css
import '@styles/pc.scss';

// ui
import { Header, Footer } from 'qiao-ui';

// dishi
import { DishiListPC, DishiOtherPC } from '@components/dishi';

// util
import { infoLog } from '@utils/log.js';

// constant
import Constant from '../_constant.js';

/**
 * dishi index pc view
 */
const DishiIndexPCView = () => {
    infoLog('dishi-web/dishi-index-pc-view: render');

    return (
        <div className='container'>
            <Header
                logo={Constant.logo}
                logoUrl={Constant.logoUrl}
                navs={Constant.navs}
            />

            <DishiListPC 
                otherList={Constant.otherList}
            />

            <DishiOtherPC 
                otherList={Constant.otherList}
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
root.render(<DishiIndexPCView />);