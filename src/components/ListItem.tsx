import {Checkbox} from "./UI/Checkbox";
import {Input} from "./UI/Input";
import React from "react";
import {Button} from "./UI/Button";
import TextWithHashtag from "../TextWithHashtag";

interface ListItemProps {
    title: string;
    id: number;
    completed: boolean;
    onClickDelete: (id: number) => void;
    hashtagList: string[];
    setHashtagList: (value: string[]) => void;
}

export const ListItem = (
    {
        title,
        id,
        completed,
        onClickDelete,
        hashtagList,
        setHashtagList
    }: ListItemProps) => {
    const [text, setText] = React.useState<string>(title);
    const [edit, setEdit] = React.useState<boolean>(false);
    const [click, setClick] = React.useState<boolean>(false);
    const [titleText, setTitleText] = React.useState<string>(title);
    const [isChecked, setIsChecked] = React.useState(completed);

    React.useEffect(() => {
        setEdit(false);
        setClick(false);
        setTitleText(text);
    }, [click])

    const onClickEdit = () => {
        if (isChecked) return;
        setEdit(true);
    }

    const onDelete = () => {
        onClickDelete(id)
    }

    const buttonClick = () => {
        setClick(true);

        const hashtagsArr = text.split(' ').filter(str => str.includes('#'));

        hashtagList.forEach(hashtag => {
            hashtagsArr.forEach((newHashtag, index) => {
                if (hashtag === newHashtag) hashtagsArr.splice(index, 1);
            })
        })

        setHashtagList([...hashtagList, ...hashtagsArr])
    }

    const changeInput = (text: string) => {
        setText(text);
    }

    if (edit) {
        return (
            <li className='listItem'>
                <div className='inputWrapper'>
                    <form>
                        <Input
                            text={text}
                            className='edit'
                            changeInput={changeInput}
                        />
                        <Button
                            title='Save'
                            buttonClick={buttonClick}
                            className='editButton'
                        />
                    </form>
                </div>
            </li>
        )
    }

    return (
        <li className='listItem'>
            <Checkbox
                isChecked={isChecked}
                setIsChecked={setIsChecked}
            >
                <TextWithHashtag
                    isChecked={isChecked}
                    text={titleText ? titleText : title}
                />
            </Checkbox>
            <div className='additional'>
                <div
                    className='additionalButton'
                    onClick={onClickEdit}
                >
                    <img
                        className='edit'
                        src='./edit.svg'
                        alt='edit'
                    />
                </div>
                <div
                    className='additionalButton'
                    onClick={onDelete}
                >
                    <img
                        className='trash'
                        src='./trash.svg'
                        alt='trash'
                    />
                </div>
            </div>
        </li>
    );
};