import React from 'react';

interface ListHashtagsProps {
    hashtagList: string[];
    setHashtag: (value: string) => void;
}

export const ListHashtags = ({hashtagList, setHashtag}: ListHashtagsProps) => {
    const onClickHashtag = (item: string) => {
        setHashtag(item);
    }

    if (!hashtagList.length) {
        return (
            <div className='listHashtags'>
                <h4 className='empty'>List of hashtags is empty...</h4>
            </div>
        )
    }

    return (
        <div className='listHashtags'>
            {hashtagList.map(title => <span
                key={title}
                className='hashtag'
                onClick={() => onClickHashtag(title)}
            >
                {title}
            </span>)}
        </div>
    );
};