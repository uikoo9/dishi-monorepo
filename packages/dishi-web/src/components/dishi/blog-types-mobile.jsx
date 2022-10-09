// react
import React, { useState, useEffect } from 'react';

// ui
import { MobileInfoList } from 'qiao-ui';

// util
import { getServerData } from '@utils/data.js';

/**
 * blog types mobile
 */
export const BlogTypesMobile = () => {
    console.log('components/blog/blog-types-mobile: render');

    // state
    const [blogTypes, setBlogTypes] = useState([]);

    // effect
    useEffect(() => {
        console.log('components/blog/blog-types-mobile: useEffect');

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
            <MobileInfoList
                blank={true}
                infoList={blogTypes}
            />
        </>
    );
};