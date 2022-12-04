import React from "react";

interface ButtonProps {
    title: string;
    className: string;
    buttonClick: () => void;
}

export const Button = React.memo(({title, className, buttonClick}: ButtonProps) => {
    const onClickButton = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        buttonClick();
    }

    return <button
        className={`button ${className}`}
        onClick={onClickButton}
    >
        {title}
    </button>
})
