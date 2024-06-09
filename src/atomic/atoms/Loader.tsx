import { useMemo } from 'react';
import { FaSpinner } from 'react-icons/fa6';
import './Loader.scss';

export type LoaderProps = {
    isLoading: boolean;
};

export const Loader = ({ isLoading }: LoaderProps) => {
    const classes = useMemo(() => {
        const items = ['loader'];
        if (isLoading) {
            items.push('loader--open');
        }
        return items.join(' ');
    }, [isLoading]);

    return (
        <div className={classes}>
            <FaSpinner className="spin" />
        </div>
    );
};
