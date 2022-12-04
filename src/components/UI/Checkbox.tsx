import React from 'react';

interface CheckboxProps {
    children: React.ReactNode;
    isChecked: boolean;
    setIsChecked: (value: boolean) => void;
}

export const Checkbox = (
    {
        children,
        isChecked,
        setIsChecked
    }: CheckboxProps) => {
    const onChangeCheckbox = () => {
        setIsChecked(!isChecked);
    }

    return (
        <label className="container">
            <p className={isChecked ? 'checked' : ''}>
                {children}
            </p>
            <input type='checkbox'
                   className='checkbox'
                   onChange={onChangeCheckbox}
                   checked={isChecked}
            />
            <span className="checkmark"></span>
        </label>
    );
};