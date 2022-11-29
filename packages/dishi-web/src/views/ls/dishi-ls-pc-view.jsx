// react
import React from "react";
import { createRoot } from "react-dom/client";

// css
import "@styles/ls/pc.scss";

// ui
import { Footer } from "qiao-ui";

// dishi
import { DishiContainer } from "@components/ls/dishi-container.jsx";

// util
import { infoLog } from "@utils/log.js";

// constant
import Constant from "../_constant.js";

/**
 * dishi ls pc view
 */
const DishiLSPCView = () => {
  infoLog("dishi-web/dishi-index-pc-view: render");

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

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<DishiLSPCView />);
