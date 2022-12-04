import React from "react";

interface InputProps {
    text: string;
    placeholder?: string;
    className: string;
    changeInput: (value: string) => void;
}

export const Input = (
    {
        text,
        placeholder,
        className,
        changeInput,
    }: InputProps) => {
    const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        changeInput(event.target.value);
    }

    return (
        <input
            onChange={onChangeInput}
            value={text}
            className={`input ${className}`}
            placeholder={placeholder}
        />
    )
}