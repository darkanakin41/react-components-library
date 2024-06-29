import {DataIteratorColumn} from "./DataIteratorColumn.ts";

export type DataIteratorRenderProps<T extends object> = {
    key: keyof T;
    columns: Array<DataIteratorColumn<T>>
    items: Array<T>;
}
