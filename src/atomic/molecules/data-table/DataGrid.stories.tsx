import type {Meta, StoryObj} from '@storybook/react';
import {DataTable} from './DataTable';
import {maxHeightDecorator} from "../../../dev/decorators/maxHeight.tsx";
import data from '../../../dev/data/1k_user.json';
import {maxWidthDecorator} from "../../../dev/decorators/maxWidth.tsx";
import {fn} from "@storybook/test";
import {DataGridRenderProps} from "./DataGridRender.tsx";
import {DataGrid} from "./DataGrid.tsx";

const baseGridConfiguration: DataGridRenderProps<any> = {
    key: 'id',
    columns: [
        {
            field: 'name',
            searchable: true,
        },
        {
            field: 'city',
            searchable: true,
        },
        {
            field: 'age',
        },
        {
            field: 'friends',
        }
    ],
    items: data,
    RenderComponent: ({item}) => {
        console.log(item)
        return (
            <div>
                <h1>{item.name}</h1>
                <p>{item.city}</p>
                <p>{item.age}</p>
                <p>{item.friends.length}</p>
            </div>
        )
    }
}

const meta = {
    title: 'Molecules/DataGrid',
    component: DataGrid,
    decorators: [
        maxHeightDecorator,
        maxWidthDecorator,
    ],
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
    args: {
        onRowClick: fn(),
    },
} satisfies Meta<typeof DataTable>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
    args: {
        ...baseGridConfiguration
    },
};

export const Paginated: Story = {
    args: {
        ...baseGridConfiguration,
        paginated: true,
        itemsPerPage: 12
    },
};
export const Searchable: Story = {
    args: {
        ...baseGridConfiguration,
        paginated: true,
        searchEnabled: true,
        itemsPerPage: 12
    },
};
