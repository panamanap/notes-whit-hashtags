import React from 'react';
import {useHashtag} from "./hooks/useHashtag";

interface TextWithHashtagProps {
    text: string;
    isChecked: boolean
}

const TextWithHashtag = ({text, isChecked}: TextWithHashtagProps) => {
    const hashtags = useHashtag(text);

    return (
        <>
            {text.split(' ').map((str: string, index: number) =>
                (hashtags.includes(str))
                    ? <span
                        className={isChecked ? '' : 'hashtag'}
                        key={index}
                    >
                        {str + ' '}
                    </span>
                    :
                    <React.Fragment
                        key={index}
                    >
                        {str + ' '}
                    </React.Fragment>
            )}
        </>
    );
};

export default TextWithHashtag;