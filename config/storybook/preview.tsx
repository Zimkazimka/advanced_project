import type { Preview } from '@storybook/react';
import '../../src/app/styles/index.scss';
import { Theme } from 'app/providers/ThemeProvider';

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
        backgrounds: {
            values: [
                { name: 'light', value: '#fafafa' },
                { name: 'dark', value: '#313333' },
            ],
        },
    },
};

export default preview;
