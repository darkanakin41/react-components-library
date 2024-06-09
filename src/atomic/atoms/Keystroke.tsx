import { useEffect } from 'react';
import './Keystroke.scss';
import {keydownHandler} from "../../utils/keydownHandler.ts";

type KeystrokeProps = {
    onPress?: () => void;
    keystone: string;
    className?: string;
};

/**
 * Simple Shortcut Key Display and handler
 */
const Keystroke = ({ onPress, keystone, className }: KeystrokeProps) => {
    useEffect(() => {
        if (!onPress) return;
        return keydownHandler.register(keystone, onPress);
    });
    return <div className={`keystroke${className ? ' ' + className : ''}`}>{keystone}</div>;
};

export { Keystroke };
