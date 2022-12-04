import React from "react";
import {ListNotes} from "./ListNotes";
import {Note} from "../types";
import {EnterWrapper} from "./EnterWrapper";
import {ListHashtags} from "./ListHashtags";
import {getAllHashtags} from "../tools/getAllHashtags";

export const MainContainer = () => {
    const [list, setList] = React.useState<Note[]>([]);
    const [filterList, setFilterList] = React.useState<Note[]>([]);
    const [hashtagList, setHashtagList] = React.useState<string[]>([]);
    const [hashtag, setHashtag] = React.useState<string>('');

    React.useEffect(() => {
        const jsonNotes = sessionStorage.getItem("notes");
        const notes = jsonNotes && JSON.parse(jsonNotes);
        if (!notes || !notes.length) {
            fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
                .then(response => response.json())
                .then(json => {
                    setList(json);
                    sessionStorage.setItem("notes", JSON.stringify(json));
                });
        } else {
            sessionStorage.setItem("notes", JSON.stringify(notes));
            setList(notes);
        }
    }, [])


    React.useEffect(() => {
        if (!hashtag) {
            setFilterList([]);
            return;
        }
        const filterList = list.filter(note => note.title.includes(hashtag));
        setFilterList(filterList);
    }, [hashtag])

    React.useEffect(() => {
        const hashtags = getAllHashtags(list);
        setHashtagList(hashtags);
        sessionStorage.setItem("notes", JSON.stringify(list));
    }, [list])

    return (
        <main className='main'>
            <EnterWrapper
                list={list}
                setList={setList}
            />
            <ListNotes
                list={filterList.length ? filterList : list}
                setList={setList}
                hashtag={hashtag}
                setHashtag={setHashtag}
                hashtagList={hashtagList}
                setHashtagList={setHashtagList}
            />
            <ListHashtags
                hashtagList={hashtagList}
                setHashtag={setHashtag}
            />
        </main>
    )
}