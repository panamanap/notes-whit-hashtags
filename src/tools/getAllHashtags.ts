import {Note} from "../types";

export function getAllHashtags(list: Note[]) {
    const hashtags: string[] = [];

    for(let i = 0; i < list.length; i++) {
        const title = list[i].title;
        let flag = false;

        hashtags.forEach(hashtag => {
            if(title === hashtag) flag = true;
        })

        if(flag) continue;

        const hashtagsArr = title.split(' ').filter(str => str.includes('#'));

        if(!hashtagsArr.length) continue;

        hashtags.push(...hashtagsArr);
    }

    return hashtags;
}