class KeydownHandler {
    private handlers: { [key: string]: (data: any) => void };

    constructor() {
        this.handlers = {};

        window.addEventListener('keydown', (event) => {
            const handler = this.handlers[event.key.toLocaleUpperCase()];
            if (!handler) {
                return;
            }
            event.preventDefault();
            event.stopPropagation();
            handler(event);
        });
    }

    register(action: string, callback: (data: any) => void) {
        this.handlers[action.toLocaleUpperCase()] = callback;

        return () => this.unregister(action);
    }

    unregister(action: string) {
        delete this.handlers[action.toLocaleUpperCase()];
    }
}

export const keydownHandler = new KeydownHandler();
