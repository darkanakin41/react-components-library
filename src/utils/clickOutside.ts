import {RefObject, useCallback, useEffect} from 'react';

const useClickOutside = (ref: RefObject<HTMLElement | null>, onClickOutside: () => void): void => {
    const callback = useCallback((event: MouseEvent) => {
        if (ref.current && !ref.current.contains(event.target as Node)) {
            onClickOutside();
        }
    }, [ref, onClickOutside])

    useEffect(() => {
        window.addEventListener('click', callback);

        return () => {
            window.removeEventListener('click', callback);
        };
    }, [callback]);
};

export { useClickOutside };
