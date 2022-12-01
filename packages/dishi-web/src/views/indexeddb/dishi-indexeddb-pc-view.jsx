// react
import React from 'react';
import { createRoot } from 'react-dom/client';

// css
import '@styles/indexeddb/pc.scss';

// ui
import { Footer } from 'qiao-ui';

// dishi
import { DishiContainer } from '@components/indexeddb/dishi-container.jsx';

// util
import { infoLog } from '@utils/log.js';

// constant
import Constant from '../_constant.js';

/**
 * dishi indexeddb pc view
 */
const DishiIndexedDBPCView = () => {
  infoLog('dishi-web/dishi-indexeddb-pc-view: render');

  return (
    <div className="container">
      <DishiContainer />

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
root.render(<DishiIndexedDBPCView />);
