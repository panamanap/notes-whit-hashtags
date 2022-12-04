import React from 'react';
import {ListItem} from "./ListItem";
import {Note} from "../types";
import {Button} from "./UI/Button";

interface ListNotesProps {
    list: Note[];
    setList: (value: Note[]) => void;
    hashtag: string;
    setHashtag: (value: string) => void;
    hashtagList: string[];
    setHashtagList: (value: string[]) => void;
}

export const ListNotes = (
    {
        list,
        setList,
        hashtag,
        setHashtag,
        hashtagList,
        setHashtagList
    }: ListNotesProps) => {
    const onClickDelete = (id: number) => {
        const newList = list.filter(note => {
            return note.id !== id
        })
        setList(newList);
    }

    const onClickEntireButton = () => {
        setHashtag('');
    }

    return (
        <div className='listNotes'>
            <div className='listHeader'>
                <h3>Notes list</h3>
                {hashtag ? <h4>{hashtag}</h4> : <h4>List length: {list.length}</h4>}
                {hashtag && <Button
                    title='Show entire list'
                    className='entire'
                    buttonClick={onClickEntireButton}
                />}
            </div>
            {list.length ?
                <ul>
                    {list.map(({id, title, completed}) =>
                        <ListItem
                            key={id}
                            title={title}
                            id={id}
                            completed={completed}
                            onClickDelete={() => onClickDelete(id)}
                            hashtagList={hashtagList}
                            setHashtagList={setHashtagList}
                            list={list}
                            setList={setList}
                        />
                    )}
                </ul>
                :
                <div className='empty'>
                    <h2>The list of notes is empty...`</h2>
                </div>
            }
        </div>
    );
};