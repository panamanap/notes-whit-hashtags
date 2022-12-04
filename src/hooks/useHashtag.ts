import React from "react";

export function useHashtag(text: string): any {
    const [hashTags, setHashTags] = React.useState<string[]>([]);

    React.useEffect(()=>{
        setHashTags(text.split(' ').filter(str => str.includes('#')))
    },[])

    return hashTags;
}