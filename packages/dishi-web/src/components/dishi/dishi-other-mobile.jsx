// react
import React from 'react';

// ui
import { MobileInfoList } from 'qiao-ui';

/**
 * dishi other mobile
 */
export const DishiOtherMobile = (props) => {
    console.log('components/dishi/dishi-other-mobile: render');

    return (
        <div className="dishi-other">
            <MobileInfoList
                blank={true}
                infoList={props.otherList}
            />
        </div>
    );
};