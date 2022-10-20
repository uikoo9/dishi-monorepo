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
    // electron
    const electronTitle = <Link url='/' txt='滴石todo - Electron' blank={true} />;
    const electronDesc = <>
        <Link url='https://static.insistime.com/21_dishi/dmg/%E6%BB%B4%E7%9F%B3-online-0.1.2-x64.dmg' txt='Mac(Intel)' blank={true} />
        &nbsp;&nbsp;
        <Link url='https://static.insistime.com/21_dishi/dmg/%E6%BB%B4%E7%9F%B3-online-0.1.2-arm64.dmg' txt='Mac(M1)' blank={true} />
        &nbsp;&nbsp;
        <Link url='https://blog.insistime.com/electron' txt='文章' blank={true} />
        &nbsp;&nbsp;
        <Link url='https://github.com/uikoo9/dishi-monorepo/tree/electron' txt='代码' blank={true} />
    </>;

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
        title: electronTitle,
        desc: electronDesc,
    }, {
        title: indexedDBTitle,
        desc: indexedDBDesc,
    }, {
        title: lsTitle,
        desc: lsDesc,
    }];
    return cards;
};