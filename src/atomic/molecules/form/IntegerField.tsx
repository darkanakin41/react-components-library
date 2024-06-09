import { BiMinus, BiPlus } from 'react-icons/bi';
import './IntegerField.scss';
import { useState } from 'react';
import {Button} from "@/atomic/atoms/Button.tsx";

type IntegerFieldProps = {
    value: number;
    onChange: (value: number) => void;
    minValue?: number;
    maxValue?: number;
};

const IntegerField = ({
    value,
    onChange,
    minValue = -Infinity,
    maxValue = Infinity
}: IntegerFieldProps) => {
    const [localValue, setLocalValue] = useState<number>(value);
    const updateValue = (newValue: number) => {
        if (newValue < minValue) {
            newValue = maxValue;
        }
        if (newValue > maxValue) {
            newValue = minValue;
        }
        setLocalValue(newValue);
        onChange(newValue);
    };

    return (
        <div className="integer-field">
            <Button className="minus" onClick={() => updateValue(localValue - 1)}>
                <BiMinus />
            </Button>
            <input
                type="number"
                onChange={(e) => updateValue(parseInt(e.target.value))}
                value={localValue}
            />
            <Button className="plus" onClick={() => updateValue(localValue + 1)}>
                <BiPlus />
            </Button>
        </div>
    );
};

export { IntegerField };
