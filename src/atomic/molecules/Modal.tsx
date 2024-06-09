import './Modal.scss';
import { FaWindowClose } from 'react-icons/fa';
import { PropsWithChildren, useMemo, useState } from 'react';
import {Button} from "../atoms/Button.tsx";

export type ModalProps = {
    title: string;
    onClose: () => void;
} & PropsWithChildren;

export const Modal = ({ title, children, onClose }: ModalProps) => {
    const [open, setOpen] = useState(true);

    const close = () => {
        setOpen(false);
        onClose();
    };

    const classes = useMemo(() => {
        const items = ['modal__wrapper'];
        if (open) {
            items.push('modal--open');
        }
        return items.join(' ');
    }, [open]);

    return (
        <div className={classes}>
            <div className="modal">
                <div className="modal__header">
                    <div className="modal__title">{title}</div>
                    <Button onClick={close}>
                        <FaWindowClose />
                    </Button>
                </div>
                <div className="modal__body">{children}</div>
            </div>
        </div>
    );
};
