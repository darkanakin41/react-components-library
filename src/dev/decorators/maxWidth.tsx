import {DecoratorFunction, } from "@storybook/types";
import {ReactRenderer} from "@storybook/react";

export const maxWidthDecorator: DecoratorFunction<ReactRenderer, {}> = (Story) => (
    <div style={{width: '80vw', maxWidth: '80vw'}}>
        <Story />
    </div>
)
