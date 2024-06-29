export type DataIteratorColumn<T extends object> = {
    field: keyof T;
    searchable?: boolean;
}
