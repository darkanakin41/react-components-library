import './DataTable.scss';
import {DataTableRender, DataTableRenderProps} from "./DataTableRender.tsx";
import {useEffect, useMemo, useState} from "react";
import {DataIteratorPagination, DataIteratorPaginationProps} from "./DataIteratorPagination.tsx";


export type DataTableProps<T extends object> = {
    paginated?: boolean,
    searchEnabled?: boolean,
    defaultSortBy?: keyof T,
    defaultSortAsc?: boolean,
} & Omit<DataTableRenderProps<T>, 'sortBy' | 'setSortBy' | 'sortAsc' | 'setSortAsc'>
    & Omit<DataIteratorPaginationProps, 'currentPage' | 'onPageChange' | 'totalItems'>

export const DataTable = <T extends object, >({defaultSortBy, defaultSortAsc = true, columns, items, key, paginated = false, searchEnabled = false, itemsPerPage = 10, onRowClick }: DataTableProps<T>) => {

    const [currentPage, setCurrentPage] = useState<number>(0);

    const [search, setSearch] = useState<string>('');

    const [sortBy, setSortBy] = useState<keyof T | null>(defaultSortBy ?? null);
    const [sortAsc, setSortAsc] = useState<boolean>(defaultSortAsc);

    useEffect(() => {
        setCurrentPage(0);
    }, [search])

    const filteredItems = useMemo(() => {
        if (!searchEnabled) {
            return items;
        }
        return items.filter((item) => {
            return columns.some((column) => {
                const value = (item as any)[column.field];
                if (typeof value === 'string') {
                    return value.toLowerCase().includes(search.toLowerCase());
                }
                return false;
            })
        })
    }, [searchEnabled, items, search]);

    const getColumnConfiguration = (field: keyof T) => {
        return columns.find((column) => column.field === field);
    }

    const sortedItems = useMemo(() => {
        const result = [...filteredItems].sort((a, b) => {
            if (sortBy === null) {
                return 0;
            }
            let valueA = (a as any)[sortBy];
            let valueB = (b as any)[sortBy];
            const column = getColumnConfiguration(sortBy);
            if(column){
                switch(column.type) {
                    case 'number':
                    case 'percentage':
                    case 'money':
                        valueA = parseFloat(valueA ?? '0');
                        valueB = parseFloat(valueB ?? '0');
                        break;
                    case 'count':
                        valueA = (valueA ?? []).length;
                        valueB = (valueB ?? []).length;
                        break;
                }
            }
            if (typeof valueA === 'string') {
                return valueA.localeCompare(valueB);
            }
            if (typeof valueA === 'number') {
                return valueA ?? 0 - valueB ?? 0;
            }
            return 0;
        });

        if (!sortAsc) {
            result.reverse();
        }

        return result;
    }, [sortBy, sortAsc, filteredItems, columns])

    const displayedItems = useMemo(() => {
        if (!paginated) {
            return sortedItems;
        }
        return sortedItems.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);
    }, [paginated, sortedItems, itemsPerPage, currentPage]);

    return (
        <div className="data-table">
            {searchEnabled && <input placeholder={"Rechercher"} value={search} onChange={(e) => setSearch(e.target.value)} className="data-table__search"/>}
            <DataTableRender key={key} items={displayedItems} columns={columns} sortAsc={sortAsc} setSortAsc={setSortAsc} sortBy={sortBy} setSortBy={setSortBy} onRowClick={onRowClick} />
            {paginated && <DataIteratorPagination currentPage={currentPage} itemsPerPage={itemsPerPage} onPageChange={setCurrentPage} totalItems={filteredItems.length}/>}
        </div>
    );
}
