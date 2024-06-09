import { useMemo, useRef, useState } from 'react';
import './SelectField.scss';
import {useClickOutside} from "../../../utils/clickOutside.ts";

type SelectFieldType<T> = {
    placeholder: string;
    value: T | null;
    choices: Array<T>;
    displayedValue: (value: T) => string;
    updateValue: (value: T) => void;
    openBottom?: boolean;
};

const SelectField = <T,>({
    placeholder,
    choices,
    value,
    updateValue,
    displayedValue,
    openBottom = false
}: SelectFieldType<T>) => {
    const [open, setOpen] = useState(false);

    const fieldRef = useRef<HTMLDivElement|null>(null);

    const classes = useMemo(() => {
        const items = ['select-field'];
        if (open) {
            items.push('select-field--open');
        }
        if (openBottom) {
            items.push('select-field--bottom');
        }
        return items.join(' ');
    }, [open, openBottom]);

    const selectValue = (value: T) => {
        updateValue(value);
        setOpen(false);
    };

    useClickOutside(fieldRef, () => setOpen(false));

    return (
        <div className={classes} onClick={() => setOpen(!open)} ref={fieldRef}>
            <div className="select-field__placeholder">
                {value ? displayedValue(value) : placeholder}
            </div>
            {open && (
                <div className="select-field__choices-wrapper">
                    <div className="select-field__choices">
                        {choices.map((choice, index) => (
                            <div
                                key={index}
                                className="select-field__choice"
                                onClick={() => selectValue(choice)}>
                                {displayedValue(choice)}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export { SelectField };
