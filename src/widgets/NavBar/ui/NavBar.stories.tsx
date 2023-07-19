import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';
import { NavBar } from 'widgets/NavBar';
import { BrowserRouter } from 'react-router-dom';

const meta = {
    title: 'widget/Navbar',
    component: NavBar,
    tags: ['autodocs'],
} satisfies Meta<typeof NavBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    decorators: [
        (Story) => (
            <BrowserRouter>
                <Story />
            </BrowserRouter>
        ),
    ],
};

export const Dark: Story = {
    decorators: [
        (Story) => (
            <BrowserRouter>
                <div className={`app ${Theme.DARK}`}>
                    <Story />
                </div>
            </BrowserRouter>
        ),
    ],
};
