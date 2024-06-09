import './DataTable.scss';
import {DataTableRender, DataTableRenderProps} from "./DataTableRender.tsx";
import {useEffect, useMemo, useState} from "react";
import {DataTablePagination, DataTablePaginationProps} from "./DataTablePagination.tsx";


export type DataTableProps<T extends object> = {
    paginated?: boolean,
    searchEnabled?: boolean,
    defaultSortBy?: keyof T,
    defaultSortAsc?: boolean,
} & Omit<DataTableRenderProps<T>, 'sortBy' | 'setSortBy' | 'sortAsc' | 'setSortAsc'>
    & Omit<DataTablePaginationProps, 'currentPage' | 'onPageChange' | 'totalItems'>

export const DataTable = <T extends object, >({defaultSortBy, defaultSortAsc = true, columns, items, key, paginated = false, searchEnabled = false, itemsPerPage = 10, }: DataTableProps<T>) => {

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

    const sortedItems = useMemo(() => {
        const result = [...filteredItems].sort((a, b) => {
            if (sortBy === null) {
                return 0;
            }
            const valueA = (a as any)[sortBy];
            const valueB = (b as any)[sortBy];
            if (typeof valueA === 'string') {
                return valueA.localeCompare(valueB);
            }
            if (typeof valueA === 'number') {
                return valueA - valueB;
            }
            return 0;
        });

        if (!sortAsc) {
            result.reverse();
        }

        return result;
    }, [sortBy, sortAsc, filteredItems])

    const displayedItems = useMemo(() => {
        if (!paginated) {
            return sortedItems;
        }
        return sortedItems.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);
    }, [paginated, sortedItems, itemsPerPage, currentPage]);

    return (
        <div className="data-table">
            {searchEnabled && <input placeholder={"Rechercher"} value={search} onChange={(e) => setSearch(e.target.value)} className="data-table__search"/>}
            <DataTableRender key={key} items={displayedItems} columns={columns} sortAsc={sortAsc} setSortAsc={setSortAsc} sortBy={sortBy} setSortBy={setSortBy}/>
            {paginated && <DataTablePagination currentPage={currentPage} itemsPerPage={itemsPerPage} onPageChange={setCurrentPage} totalItems={filteredItems.length}/>}
        </div>
    );
}
