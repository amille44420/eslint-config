import { Linter } from 'eslint';
import baseConfig from './base';

const config: Linter.Config = {
    plugins: ['prettier', 'react-hooks'],
    extends: ['airbnb', 'prettier'],
    rules: {
        ...baseConfig.rules,
        'jsx-a11y/anchor-is-valid': [
            'error',
            {
                components: ['Link'],
                specialLink: ['to'],
                aspects: ['noHref', 'invalidHref', 'preferButton'],
            },
        ],
        'jsx-quotes': ['error', 'prefer-double'],
        'react/function-component-definition': [
            'error',
            {
                namedComponents: 'arrow-function',
                unnamedComponents: 'arrow-function',
            },
        ],
        'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': ['error', 4],
        'react/jsx-no-useless-fragment': 'error',
        'react/jsx-on-expression-per-line': 'off',
        'react/jsx-props-no-spreading': 'off',
        'react/jsx-sort-default-props': 'error',
        'react/jsx-sort-props': [
            'error',
            {
                reservedFirst: true,
                shorthandLast: true,
            },
        ],
        'react/require-default-props': 'off',
        'react/sort-prop-types': 'error',
        'react-hooks/exhaustive-deps': 'warn',
    },
};

export default config;
