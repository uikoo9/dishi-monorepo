// react
import React, { useState, useEffect } from 'react';

// ui
import { InfoList } from 'qiao-ui';

// util
import { getServerData } from '@utils/data.js';

/**
 * blog types pc
 */
export const BlogTypesPC = () => {
    console.log('components/blog/blog-types-pc: render');

    // state
    const [blogTypes, setBlogTypes] = useState([]);

    // effect
    useEffect(() => {
        console.log('components/blog/blog-types-pc: useEffect');

        const data = getServerData();
        if (!data || !data.length) return;

        // blog types final
        const blogTypesFinal = data.map((item) => {
            return {
                url: `/${item.id}`,
                title: item.blog_type_name,
                other: item.cdate
            };
        });
        setBlogTypes(blogTypesFinal);
    }, []);// eslint-disable-line react-hooks/exhaustive-deps

    return (
        <>
            <InfoList
                blank={true}
                infoList={blogTypes}
            />
        </>
    );
};