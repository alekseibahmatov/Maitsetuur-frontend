import React from 'react';
import {Field} from "formik";

export const LimitedTextAreaCoupon = ({handleTextChange, rows, cols, value, limit}) => {
    const [content, setContent] = React.useState(value.slice(0, limit));

    const setFormattedContent = React.useCallback(text => {
        const newText = text.slice(0, limit);
        setContent(newText);
    }, [limit, setContent, handleTextChange]);

    return (
        <>
              <textarea
                  className='inputAuthenticationInput resizeHeight paddingRight'
                  placeholder='Congratulations text...'
                  rows={rows}
                  cols={cols}
                  onChange={event => setFormattedContent(event.target.value)}
                  value={content}
              />
            <div className='wordCountText'>
                {content.length}/{limit}
            </div>
        </>
    );
};