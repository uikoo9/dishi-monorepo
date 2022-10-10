// react
import React, { useState, useEffect } from 'react';

// ui
import { InfoList } from 'qiao-ui';

// util
import { getServerData } from '@utils/data.js';

/**
 * dishi list pc
 */
export const DishiListPC = () => {
    console.log('components/dishi/dishi-list-pc: render');

    // state
    const [dishiList, setDishiList] = useState([]);

    // effect
    useEffect(() => {
        console.log('components/dishi/dishi-list-pc: useEffect');

        const data = getServerData();
        if (!data || !data.length) return;

    }, []);// eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className="dishi-list">
            <InfoList
                blank={true}
                infoList={dishiList}
            />
        </div>
    );
};