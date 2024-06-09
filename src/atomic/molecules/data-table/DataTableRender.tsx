import {formatMoney, formatNumber, formatPercentage} from "../../../utils/formatNumber.ts";
import React from "react";

export type ColumnComponent<T extends object> = React.FC<{ item: T }>;

export type DataTableColumn<T extends object> = {
    field: keyof T;
    label: string;
    sortable?: boolean;
    searchable?: boolean;
    type?: 'string' | 'number' | 'count' | 'percentage' | 'money' | 'component';
    component?: ColumnComponent<T>;
}

export type DataTableRenderProps<T extends object> = {
    key: keyof T;
    columns: Array<DataTableColumn<T>>;
    items: Array<T>;
    onRowClick?: (item: T) => void;
    sortBy: keyof T | null;
    setSortBy: (sortBy: keyof T | null) => void;
    sortAsc: boolean;
    setSortAsc: React.Dispatch<React.SetStateAction<boolean>>;
}

export const DataTableRender = <T extends object, >({columns, items, key, onRowClick, sortBy, setSortBy, sortAsc, setSortAsc}: DataTableRenderProps<T>) => {
    const getValue = (item: T, column: DataTableColumn<T>) => {
        switch (column.type) {
            case 'string':
                return (item as any)[column.field];
            case 'number':
                return formatNumber((item as any)[column.field]);
            case 'percentage':
                return formatPercentage((item as any)[column.field]);
            case 'money':
                return formatMoney((item as any)[column.field]);
            case 'count':
                return formatNumber((item as any)[column.field].length);
            case 'component':
                if (!column.component) return "#N/C";
                return <column.component item={item}/>;
        }
    }

    const getCellClass = (column: DataTableColumn<T>, isHeader = false) => {
        const classes = [];
        switch (column.type) {
            case 'number':
            case 'count':
                classes.push('cell--right');
                break;
            default:
                break;
        }

        if (column.sortable && isHeader) {
            classes.push('data-table__cell--clickable');
        }

        return classes.join(' ');
    }

    const handleRowClick = (item: T) => {
        if (onRowClick) {
            onRowClick(item);
        }
    }

    const getRowClass = () => {
        if (onRowClick) {
            return 'data-table__row--clickable';
        }
        return '';
    }

    const handleHeaderCellClick = (column: DataTableColumn<T>) => {
        if (column.sortable) {
            if (column.field === sortBy) {
                setSortAsc((prev:boolean) => !prev);
            } else {
                setSortBy(column.field);
                setSortAsc(true);
            }
        }
    }

    return (
        <div className="data-table__table-wrapper">
            <table>
                <thead>
                <tr>
                    {columns.map((column) => (
                        <th className={getCellClass(column, true)} onClick={() => handleHeaderCellClick(column)}>
                            {column.label}
                        </th>
                    ))}
                </tr>
                </thead>
                <tbody>
                {items.length === 0 && (
                    <tr>
                        <td colSpan={columns.length} className="cell--center">
                            Aucun résultat
                        </td>
                    </tr>
                )}
                {items.map((item) => (
                    <tr key={item[key] as string} onClick={() => handleRowClick(item)} className={getRowClass()}>
                        {columns.map((column) => (
                            <td className={getCellClass(column)}>{getValue(item, column)}</td>
                        ))}
                    </tr>
                ))}
                </tbody>
            </table>
        </div>)
}
