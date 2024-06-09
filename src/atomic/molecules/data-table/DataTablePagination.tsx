import {Button} from "../../atoms/Button.tsx";
import {useMemo} from "react";

export type DataTablePaginationProps = {
    totalItems: number;
    itemsPerPage: number;
    currentPage: number;
    onPageChange: (page: number) => void;
}

export const DataTablePagination = ({totalItems,
                                        itemsPerPage,
                                        currentPage,
                                        onPageChange}: DataTablePaginationProps) => {
    const maxPage = useMemo(() => Math.ceil(totalItems / itemsPerPage), [totalItems, itemsPerPage]);
    return (
        <div className="data-table__pagination">
            <div className="button-group">
                <button disabled={currentPage === 0} className="button" onClick={() => onPageChange(currentPage - 1)}>Précédent</button>
                <Button disabled>{currentPage + 1} / {maxPage}</Button>
                <button disabled={currentPage ===  maxPage - 1}className="button" onClick={() => onPageChange(currentPage + 1)}>Suivant</button>
            </div>
        </div>)
}
