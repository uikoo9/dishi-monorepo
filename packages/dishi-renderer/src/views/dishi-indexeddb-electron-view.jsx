// react
import React from 'react';
import { createRoot } from 'react-dom/client';

// css
import '@styles/pc.scss';

// dishi
import { DishiContainer } from '@components/dishi-container.jsx';

// util
import { infoLog } from '@utils/log.js';

/**
 * dishi indexeddb electron view
 */
const DishiIndexedDElectronCView = () => {
  infoLog('dishi-web/dishi-indexeddb-electron-view: render');

  return (
    <div className="container">
      <DishiContainer />
    </div>
  );
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<DishiIndexedDElectronCView />);
