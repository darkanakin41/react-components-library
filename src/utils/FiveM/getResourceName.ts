import {isDev} from "../isDev.ts";

declare global {
    interface Window {
        GetParentResourceName: any;
    }
}

const getResourceName = () => {
    if (isDev) {
        return 'localhost';
    }

    if (typeof window.GetParentResourceName !== 'undefined') {
        return window.GetParentResourceName();
    }
    return 'localhost';
};

export default getResourceName;
