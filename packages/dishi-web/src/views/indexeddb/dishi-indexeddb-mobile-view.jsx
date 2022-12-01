// react
import React from 'react';
import { createRoot } from 'react-dom/client';

// css
import '@styles/indexeddb/mobile.scss';

// ui
import { MobileFooter } from 'qiao-ui';

// dishi
import { DishiContainer } from '@components/indexeddb/dishi-container.jsx';

// util
import { infoLog } from '@utils/log.js';

// constant
import Constant from '../_constant.js';

/**
 * dishi indexeddb mobile view
 */
const DishiIndexedDBMobileView = () => {
  infoLog('dishi-web/dishi-indexeddb-mobile-view: render');

  return (
    <div className="container">
      <DishiContainer />

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
root.render(<DishiIndexedDBMobileView />);
