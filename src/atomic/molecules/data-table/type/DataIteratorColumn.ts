import {ColumnComponent} from "../DataTableRender.tsx";

export type DataIteratorColumn<T extends object> = {
    field: keyof T;
    searchable?: boolean;
    sortable?: boolean;
    type?: 'string' | 'number' | 'count' | 'percentage' | 'money' | 'component';
    label: string;
    component?: ColumnComponent<T>;
}
