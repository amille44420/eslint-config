module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    extends: [require.resolve('./index'), 'plugin:@typescript-eslint/recommended', 'prettier'],
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.js', '.ts'],
            },
        },
    },
    rules: {
        'import/extensions': [
            'error',
            'always',
            {
                js: 'never',
                ts: 'never',
            },
        ],
    },
};
