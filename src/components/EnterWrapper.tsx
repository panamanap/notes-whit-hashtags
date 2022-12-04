import React from 'react';
import {Button} from "./UI/Button";
import {Note} from "../types";
import {Input} from "./UI/Input";

interface EnterWrapperProps {
    list: Note[];
    setList: (value: Note[]) => void;
}
export const EnterWrapper = ({list, setList}: EnterWrapperProps) => {
    const enterWrapper = React.createRef<HTMLFormElement>();
    const [click, setClick] = React.useState<boolean>(false);
    const [text, setText] = React.useState<string>('')

    React.useEffect(() => {
        setClick(false);

        if (!click || !text) return;

        const newNote = {
            id: Number(new Date()),
            title: text,
            completed: false
        }

        setList([newNote, ...list]);
        setText('');
    }, [click])

    const buttonClick = () => {
        setClick(true)
    }

    const changeInput = (text: string) => {
        setText(text);
    }

    return (
        <div className='inputWrapper enter'>
            <form ref={enterWrapper}>
                <Input
                    text={text}
                    placeholder='Enter note...'
                    changeInput={changeInput}
                    className='addNote'
                />
                <Button
                    title='>'
                    className='addNoteButton'
                    buttonClick={buttonClick}
                />
            </form>
        </div>
    );
};