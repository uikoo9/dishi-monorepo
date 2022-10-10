// react
import React from 'react';

// ui
import { InfoList } from 'qiao-ui';

/**
 * dishi other pc
 */
export const DishiOtherPC = (props) => {
    console.log('components/dishi/dishi-other-pc: render');

    return (
        <div className="dishi-other">
            <InfoList
                blank={true}
                infoList={props.otherList}
            />
        </div>
    );
};