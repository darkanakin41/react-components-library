import type {Meta, StoryObj} from '@storybook/react';
import {DataTable, DataTableProps} from './DataTable';
import {maxHeightDecorator} from "../../../dev/decorators/maxHeight.tsx";
import data from '../../../dev/data/1k_user.json';
import {maxWidthDecorator} from "../../../dev/decorators/maxWidth.tsx";
import {fn} from "@storybook/test";

const baseTableConfiguration: DataTableProps<any> = {
    key: 'id',
    columns: [
        {
            field: 'name',
            label: 'Prénom',
            type: 'string',
            searchable: true,
            sortable: true,
        },
        {
            field: 'city',
            label: 'Nom',
            type: 'string',
            searchable: true,
            sortable: true,
        },
        {
            field: 'age',
            label: 'Age',
            type: 'number',
            sortable: true,
        },
        {
            field: 'friends',
            label: 'Nombre d\'amis',
            type: 'count',
            sortable: true,
        },
        {
            field: 'friends',
            label: 'Amis',
            type: 'component',
            component: ({item}) => (
                <>{item.friends.map((friend: any) => friend.name).join(', ')}</>
            )
        }
    ],
    items: data,
}

const meta = {
    title: 'Molecules/DataTable',
    component: DataTable,
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
        ...baseTableConfiguration
    },
};

export const Paginated: Story = {
    args: {
        ...baseTableConfiguration,
        paginated: true,
        itemsPerPage: 10
    },
};
export const Searchable: Story = {
    args: {
        ...baseTableConfiguration,
        paginated: true,
        searchEnabled: true,
    },
};
