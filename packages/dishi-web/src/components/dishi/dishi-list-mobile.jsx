// react
import React, { useState, useEffect } from 'react';

// ui
import { MobileInfoList } from 'qiao-ui';

// util
import { getServerData } from '@utils/data.js';

/**
 * dishi list mobile
 */
export const DishiListMobile = () => {
    console.log('components/dishi/dishi-list-mobile: render');

    // state
    const [dishiList, setDishiList] = useState([]);

    // effect
    useEffect(() => {
        console.log('components/dishi/dishi-list-mobile: useEffect');

        const data = getServerData();
        if (!data || !data.length) return;

    }, []);// eslint-disable-line react-hooks/exhaustive-deps

    return (
        <>
            <MobileInfoList
                blank={true}
                infoList={dishiList}
            />
        </>
    );
};