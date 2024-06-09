export const objectToArray = <T,>(data: Array<T> | object): Array<T> => {
    if(typeof data === 'object') {
        return Object.values(data);
    }

    return data;
}
