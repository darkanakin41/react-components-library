import {DecoratorFunction, } from "@storybook/types";
import {ReactRenderer} from "@storybook/react";

export const maxHeightDecorator: DecoratorFunction<ReactRenderer, {}> = (Story) => (
    <div style={{height: '80vh', maxHeight: '80vh'}}>
        <Story />
    </div>
)
