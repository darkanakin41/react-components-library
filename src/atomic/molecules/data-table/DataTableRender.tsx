import {formatMoney, formatNumber, formatPercentage} from "../../../utils/formatNumber.ts";
import React from "react";
import {DataIteratorColumn} from "./type/DataIteratorColumn.ts";
import {DataIteratorRenderProps} from "./type/DataIteratorRenderProps.ts";

export type ColumnComponent<T extends object> = React.FC<{ item: T }>;

export type DataTableRenderProps<T extends object> = DataIteratorRenderProps<T> & {
    columns: Array<DataIteratorColumn<T>>;
    sortBy: keyof T | null;
    setSortBy: (sortBy: keyof T | null) => void;
    sortAsc: boolean;
    setSortAsc: React.Dispatch<React.SetStateAction<boolean>>;
    onRowClick?: (item: T) => void;
};

export const DataTableRender = <T extends object, >({columns, items, key, onRowClick, sortBy, setSortBy, sortAsc, setSortAsc}: DataTableRenderProps<T>) => {
    const getValue = (item: T, column: DataIteratorColumn<T>) => {
        switch (column.type) {
            default:
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

    const getCellClass = (column: DataIteratorColumn<T>, isHeader = false) => {
        const classes = [];
        switch (column.type) {
            case 'number':
            case 'count':
            case 'percentage':
            case 'money':
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

    const handleHeaderCellClick = (column: DataIteratorColumn<T>) => {
        if (column.sortable) {
            if (column.field === sortBy) {
                setSortAsc((prev:boolean) => !prev);
            } else {
                setSortBy(column.field);
                setSortAsc(true);
            }
        }
    }

    const Sorted = ({column}: {column: DataIteratorColumn<T>}) => {
        if (column.sortable) {
            if (column.field === sortBy) {
                return sortAsc ? '↑' : '↓';
            }
        }
        return " ";
    }

    return (
        <div className="data-table__table-wrapper">
            <table>
                <thead>
                <tr>
                    {columns.map((column) => (
                        <th className={getCellClass(column, true)} onClick={() => handleHeaderCellClick(column)}>
                            {<Sorted column={column} />} {column.label}
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
