import React from 'react';

export const LimitedTextArea = ({rows, cols, value, limit}) => {
    const [content, setContent] = React.useState(value.slice(0, limit));

    const setFormattedContent = React.useCallback(
        text => {
            setContent(text.slice(0, limit));
        },
        [limit, setContent]
    );

    return (
        <>
      <textarea
          className='businessInputValue fullHeight'
          placeholder='Congratulations text...'
          rows={rows}
          cols={cols}
          onChange={event => setFormattedContent(event.target.value)}
          value={content}
      />
            <div className='wordCount1'>
                {content.length}/{limit}
            </div>
        </>
    );
};