import {DataIteratorRenderProps} from "./type/DataIteratorRenderProps.ts";
import Style from './DataGridRender.module.scss'

export type DataGridRenderProps<T extends object> = {
    RenderComponent: ({ item }: {item:T}) => JSX.Element;
} & DataIteratorRenderProps<T>

export const DataGridRender = <T extends object,>({items, RenderComponent, key}: DataGridRenderProps<T>) => {
    return (
        <div className={`data-grid__wrapper ${Style.wrapper}`}>
            {items.map((item) => {
                return (<RenderComponent item={item} key={item[key]}/>)
            })}
        </div>
    )
}
