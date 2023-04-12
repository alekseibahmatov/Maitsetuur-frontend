import React from 'react';

export const LimitedTextAreaCoupon = ({rows, cols, value, limit}) => {
    const [content, setContent] = React.useState(value.slice(0, limit));

    const setFormattedContent = React.useCallback(text => {
        setContent(text.slice(0, limit));
    }, [limit, setContent]);

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