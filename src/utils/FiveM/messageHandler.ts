import axios, { AxiosInstance } from 'axios';
import getResourceName from './getResourceName.ts';
import { isDev } from '../isDev.ts';

type DebugResponse = (body: { [key: string]: unknown }) => Response | Promise<Response>;
type AxiosDebugReponses = { [key: string]: DebugResponse };

class MessageHandler {
    private handlers: { [key: string]: (data: unknown) => void };

    private client: AxiosInstance;

    private axiosDebugResponses: AxiosDebugReponses = {};

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

        let axiosClient = axios.create({
            baseURL: `https://${getResourceName()}`,
            timeout: isDev ? 10 : 30000
        });

        if (isDev) {
            axiosClient = this.initializeDevInterceptor(axiosClient);
        }

        this.client = axiosClient;
    }

    register(action: string, callback: (data: unknown) => void) {
        this.handlers[action] = callback;

        return () => this.unregister(action);
    }

    unregister(action: string) {
        delete this.handlers[action];
    }

    updateClient(action: string, data?: unknown) {
        return this.client.post(`${action}`, data);
    }

    registerDebugResponse(eventName: string, response: DebugResponse) {
        this.axiosDebugResponses[eventName] = response;
    }

    private initializeDevInterceptor(client: AxiosInstance) {
        client.interceptors.response.use(
            (response) => {
                return response;
            },
            async (error) => {
                if (isDev) {
                    const body = error.config.data ?? {};
                    const eventName = error.config.url.replace(error.config.baseURL + '/', '');

                    if (!Object.keys(this.axiosDebugResponses).includes(eventName)) {
                        console.debug(`Empty response for ${eventName} ${JSON.stringify(body)}`);
                        return Promise.resolve({});
                    }

                    console.debug(`Response found for ${eventName} ${JSON.stringify(body)}`);
                    let response = this.axiosDebugResponses[eventName](body);
                    if (response instanceof Promise) {
                        response = await response;
                    }
                    return Promise.resolve({ data: await response.json() });
                }
                return Promise.reject(
                    error.message === 'TIMEOUT' ? { ...error, code: 'ETIMEDOUT' } : error
                );
            }
        );

        return client;
    }
}

export const messageHandler = new MessageHandler();
