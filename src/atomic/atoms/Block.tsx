import { PropsWithChildren, useCallback, useMemo } from 'react';
import './Block.scss';

type BlockProps = {
    title?: string;
    subTitle?: JSX.Element | null;
    className?: string;
    overflowBody?: boolean;
    footer?: JSX.Element | null;
    onMouseLeave?: () => void;
} & PropsWithChildren;

const Block = ({
    title,
    subTitle,
    className,
    onMouseLeave,
    footer = null,
    children,
    overflowBody = false
}: BlockProps) => {
    const blockClasses = useMemo(
        () =>
            ['block', className, overflowBody && 'block--body-overflow'].filter(Boolean).join(' '),
        [className, overflowBody]
    );
    const wrapperClasses = useMemo(
        () =>
            [
                'block-wrapper',
                className ? `${className}__wrapper` : null,
                overflowBody && 'block-wrapper--overflow'
            ]
                .filter(Boolean)
                .join(' '),
        [className, overflowBody]
    );

    const handleOnMouseLeave = useCallback(() => {
        onMouseLeave?.();
    }, [onMouseLeave]);

    return (
        <div className={wrapperClasses} onMouseLeave={handleOnMouseLeave}>
            <div className={blockClasses}>
                {title && <div className="block-title">{title}</div>}
                {subTitle && <div className="block-sub-title">{subTitle}</div>}
                <div className="block-content">{children}</div>
                {footer && <div className="block-footer">{footer}</div>}
            </div>
        </div>
    );
};

export { Block };
