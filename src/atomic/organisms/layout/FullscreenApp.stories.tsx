import type { Meta, StoryObj } from '@storybook/react';
import { FullscreenApp } from './FullscreenApp';
import logo from "../../../assets/mycity-rp/logo-transparent-white.png";
import {Block} from "../../atoms/Block.tsx";
import {fivemParameters} from "../../../../.storybook/preview.ts";

const meta = {
  title: 'Organisms/Layout/Fullscreen App',
  component: FullscreenApp,
  parameters: {
    layout: 'centered',
    ...fivemParameters,
  },
  argTypes: {
  },
  args: {
  },
} satisfies Meta<typeof FullscreenApp>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Simple: Story = {
  args: {
    headerRight: (<img src={logo} alt="logo" className="logo" style={{height: "3rem" ,opacity: .60, }}/>),
    contentLeft: (<Block title="Left Column" overflowBody>
      <div style={{height: '100vh'}}>This is the body of the block.'</div>
    </Block>)
  },
};

export const Full: Story = {
  args: {
    headerRight: (<img src={logo} alt="logo" className="logo" style={{height: "3rem" ,opacity: .60, }}/>),
    contentLeft: (<>
      <Block title="Left Column">
        This is the body of the block.
      </Block>
      <Block title="Second Left Column" overflowBody>
      <div style={{height: '100vh'}}>This is the body of the block.'</div>
    </Block></>),
    contentRight: (<Block title="Right Column" overflowBody>
      <div style={{height: '100vh'}}>This is the body of the block.'</div>
    </Block>),
    footerLeft: (<div style={{padding: ".5rem 1rem"}}>Footer Left</div>),
    footerCenter: (<div style={{padding: ".5rem 1rem"}}>Footer Center</div>),
    footerRight: (<div style={{padding: ".5rem 1rem"}}>Footer Right</div>),
  },
};
