const { rules } = require('./index');

module.exports = {
    plugins: ['prettier'],
    extends: ['airbnb', 'prettier', 'prettier/react'],
    rules: {
        ...rules,
        'jsx-a11y/anchor-is-valid': [
            'error',
            {
                components: ['Link'],
                specialLink: ['to'],
                aspects: ['noHref', 'invalidHref', 'preferButton'],
            },
        ],
        'jsx-quotes': ['error', 'prefer-double'],
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
    },
};
