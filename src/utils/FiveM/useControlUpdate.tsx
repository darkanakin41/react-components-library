import { useEffect, useState } from 'react';
import {messageHandler} from "./messageHandler.ts";

export const useControlUpdate = () => {
    const isInInputField = () => {
        return (
            document.activeElement !== null &&
            ['input', 'textarea'].indexOf(document.activeElement.tagName.toLowerCase()) !== -1
        );
    };

    const [hasControls, setHasControls] = useState(false);
    useEffect(() => {
        const updateControls = (state: boolean) => {
            setHasControls(state);
            messageHandler.updateClient('update-controls', { state: hasControls });
        };

        const interval = setInterval(() => {
            if (isInInputField() && !hasControls) {
                updateControls(true);
                return;
            }
            if (!isInInputField() && hasControls) {
                updateControls(false);
            }
        }, 50);

        return () => clearInterval(interval);
    }, [hasControls]);
};
