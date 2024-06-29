import React, {ForwardedRef, forwardRef, PropsWithChildren, useMemo} from 'react';
import './Button.scss';
import {Keystroke} from "./Keystroke.tsx";

type ButtonProps = {
    square?: boolean;
    block?: boolean;
    isActive?: boolean;
    className?: string;
    keystone?: string;
    disabled?: boolean;
    pill?: boolean;
    tooltip?: string;
    type?: 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'danger';
    tooltipPosition?: 'bottom' | 'top' | 'left' | 'right';
    onClick?: () => void;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
} & PropsWithChildren;

/**
 * Simple Button Component
 */
const Button = forwardRef(function Button({
                                              square,
                                              block,
                                              isActive,
                                              onClick,
                                              onMouseEnter,
                                              onMouseLeave,
                                              className,
                                              disabled,
                                              keystone,
                                              tooltip,
                                              tooltipPosition = 'top',
                                              children,
                                              type,
                                              pill,
                                          }: ButtonProps, ref: ForwardedRef<HTMLButtonElement> ) {
    const classes = useMemo<string>(() => {
        const classes = ['button'];
        if (type) {
            classes.push(`button--${type}`);
        }
        if (square) {
            classes.push('button--square');
        }
        if (block) {
            classes.push('button--block');
        }
        if (isActive) {
            classes.push('button--active');
        }
        if (pill) {
            classes.push('button--pill');
        }
        if (className) {
            classes.push(className);
        }
        return classes.join(' ');
    }, [className, block, pill, type, square, isActive]);

    const handleClick = (event?: React.MouseEvent) => {
        event?.stopPropagation();
        event?.preventDefault();
        if (disabled) {
            return;
        }
        onClick?.();
    };

    const handleOnMouseEnter = (event?: React.MouseEvent) => {
        event?.stopPropagation();
        event?.preventDefault();
        if (disabled) {
            return;
        }
        onMouseEnter?.();
    };

    const handleOnMouseLeave = () => {
        if (disabled) {
            return;
        }
        onMouseLeave?.();
    };

    const tooltipConfiguration = useMemo(() => {
        if (!tooltip) {
            return {};
        }
        return {
            'data-tooltip': tooltip,
            'data-tooltip-position': tooltipPosition
        };
    }, [tooltip, tooltipPosition]);

    return (
        <button
            ref={ref}
            disabled={disabled}
            className={classes}
            onClick={handleClick}
            onMouseEnter={handleOnMouseEnter}
            onMouseLeave={handleOnMouseLeave}
            {...tooltipConfiguration}>
            {keystone && <Keystroke keystone={keystone} onPress={handleClick} />}
            {children}
        </button>
    );
});

export { Button };
