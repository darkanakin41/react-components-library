import axios from 'axios';
import getResourceName from "@/utils/FiveM/getResourceName.ts";

class MessageHandler {
    private handlers: { [key: string]: (data: unknown) => void };

    constructor() {
        this.handlers = {};

        window.addEventListener('message', (event) => {
            const action = event.data.message;
            const data = event.data;

            if (!this.handlers[action]) {
                return;
            }

            this.handlers[action](data);
        });
    }

    register(action: string, callback: (data: unknown) => void) {
        this.handlers[action] = callback;

        return () => this.unregister(action);
    }

    unregister(action: string) {
        delete this.handlers[action];
    }

    updateClient(action: string, data?: unknown) {
        return axios.post(`https://${getResourceName()}/${action}`, data);
    }
}

export const messageHandler = new MessageHandler();
