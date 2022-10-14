// react
import React from 'react';

// ui
import {
    Link,
} from 'qiao-ui';

/**
 * dishi container
 */
export const DishiCards = () => {
    // indexeddb
    const indexedDBTitle = <Link url='/indexeddb' txt='滴石todo - IndexedDB' blank={true} />;
    const indexedDBDesc = <>
        <Link url='/indexeddb' txt='地址' blank={true} />
        &nbsp;&nbsp;
        <Link url='https://blog.insistime.com/indexeddb' txt='文章' blank={true} />
        &nbsp;&nbsp;
        <Link url='https://github.com/uikoo9/dishi-monorepo/tree/indexeddb' txt='代码' blank={true} />
    </>;

    // ls
    const lsTitle = <Link url='/ls' txt='滴石todo - LocalStorage' blank={true} />;
    const lsDesc = <>
        <Link url='/ls' txt='地址' blank={true} />
        &nbsp;&nbsp;
        <Link url='https://blog.insistime.com/dishi1' txt='文章' blank={true} />
        &nbsp;&nbsp;
        <Link url='https://github.com/uikoo9/dishi-monorepo/tree/localstorage' txt='代码' blank={true} />
    </>;

    // cards
    const cards = [{
        title: indexedDBTitle,
        desc: indexedDBDesc,
    }, {
        title: lsTitle,
        desc: lsDesc,
    }];
    return cards;
};