import './FullscreenApp.scss';
import { PropsWithChildren, useMemo } from 'react';

type FullscreenAppProps = {
    classeName?: string;
    headerLeft?: JSX.Element;
    headerCenter?: JSX.Element;
    headerRight?: JSX.Element;
    footerLeft?: JSX.Element;
    footerCenter?: JSX.Element;
    footerRight?: JSX.Element;
    contentLeft?: JSX.Element;
    contentRight?: JSX.Element;
    footer?: JSX.Element;
} & PropsWithChildren;

export const FullscreenApp = ({
    classeName,
    headerLeft,
    headerCenter,
    headerRight,
    children,
    contentLeft,
    contentRight,
    footerLeft,
    footerCenter,
    footerRight,
}: FullscreenAppProps) => {
    const classes = useMemo(() => {
        const items = ['app'];
        if (classeName) {
            items.push(classeName);
        }
        if (contentLeft) {
            items.push('app--left-column');
        }
        if (contentRight) {
            items.push('app--right-column');
        }
        return items.join(' ');
    }, [classeName, contentLeft, contentRight]);

    return (
        <div className={classes}>
            <div className="app__header">
                <div className="app__header-left">{headerLeft}</div>
                <div className="app__header-center">{headerCenter}</div>
                <div className="app__header-right">{headerRight}</div>
            </div>
            <div className="app__content">
                {children}
                {!children && <div className="app__content-left">{contentLeft}</div>}
                {!children && <div className="app__content-right">{contentRight}</div>}
            </div>
            <div className="app__footer">
                <div className="app__footer-left">{footerLeft}</div>
                <div className="app__footer-center">{footerCenter}</div>
                <div className="app__footer-right">{footerRight}</div>
            </div>
        </div>
    );
};
