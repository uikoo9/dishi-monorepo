// react
import React from 'react';
import { createRoot } from 'react-dom/client';

// css
import '@styles/pc.scss';

// ui
import { Header, Footer } from 'qiao-ui';

// blog
import { BlogTypesPC } from '@components/blog';

// util
import { infoLog } from '@utils/log.js';

// constant
import Constant from '../_constant.js';

/**
 * blog index pc view
 */
const BlogIndexPCView = () => {
    infoLog('blog-web/blog-index-pc-view: render');

    return (
        <div className='container'>
            <Header
                logo={Constant.logo}
                logoUrl={Constant.logoUrl}
                navs={Constant.navs}
            />

            <BlogTypesPC />

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
root.render(<BlogIndexPCView />);