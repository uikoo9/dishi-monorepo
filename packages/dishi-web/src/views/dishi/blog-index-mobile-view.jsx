// react
import React from 'react';
import { createRoot } from 'react-dom/client';

// css
import '@styles/mobile.scss';

// ui
import { MobileHeader, MobileFooter } from 'qiao-ui';

// blog
import { BlogTypesMobile } from '@components/blog';

// util
import { infoLog } from '@utils/log.js';

// constant
import Constant from '../_constant.js';

/**
 * blog index mobile view
 */
const BlogIndexMobileView = () => {
    infoLog('blog-web/blog-index-mobile-view: render');

    return (
        <div className='container'>
            <MobileHeader
                logo={Constant.logo}
                logoUrl={Constant.logoUrl}
                navs={Constant.navs}
            />

            <BlogTypesMobile />

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
root.render(<BlogIndexMobileView />);