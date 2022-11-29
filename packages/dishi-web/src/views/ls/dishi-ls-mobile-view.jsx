// react
import React from "react";
import { createRoot } from "react-dom/client";

// css
import "@styles/ls/mobile.scss";

// ui
import { MobileFooter } from "qiao-ui";

// dishi
import { DishiContainer } from "@components/ls/dishi-container.jsx";

// util
import { infoLog } from "@utils/log.js";

// constant
import Constant from "../_constant.js";

/**
 * dishi ls mobile view
 */
const DishiLSMobileView = () => {
  infoLog("dishi-web/dishi-index-mobile-view: render");

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

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<DishiLSMobileView />);
