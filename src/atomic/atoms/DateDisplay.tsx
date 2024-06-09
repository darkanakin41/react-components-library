import { useEffect, useState } from 'react';

export type DateDisplayProps = {
    format?: Intl.DateTimeFormatOptions;
    locale?: string;
};

/**
 * Display Time in a given format and update it automatically
 */
export const DateDisplay = ({
    format = {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    },
    locale = 'fr-FR'
}: DateDisplayProps) => {
    const [date, setDate] = useState(new Date());
    useEffect(() => {
        const timer = setInterval(() => {
            setDate(new Date());
        }, 1000);
        return () => clearInterval(timer);
    }, [date]);

    return <>{date.toLocaleTimeString(locale, format)}</>;
};
