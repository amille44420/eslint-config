module.exports = {
    plugins: ['prettier'],
    extends: ['airbnb-base', 'prettier'],
    rules: {
        'prettier/prettier': 'error',
        curly: ['error', 'all'],
        'import/order': [
            'error',
            {
                alphabetize: {
                    order: 'asc',
                },
                pathGroups: [
                    {
                        // Put imported assets last
                        pattern: '*.{css,gif,jpeg,png,scss,svg}',
                        patternOptions: {
                            matchBase: true,
                        },
                        group: 'index',
                        position: 'after',
                    },
                ],
            },
        ],
        'import/prefer-default-export': ['warn'],
        'max-len': ['warn', 120],
        'no-console': ['error', { allow: ['warn', 'error', 'info'] }],
        'no-continue': 'off',
        'no-multiple-empty-lines': ['error', { max: 1, maxBOF: 0, maxEOF: 0 }],
        'no-plusplus': 'off',
        'no-restricted-syntax': ['error', 'ForInStatement', 'LabeledStatement', 'WithStatement'],
        'object-curly-newline': 'off',
        'padding-line-between-statements': ['error', { blankLine: 'always', prev: '*', next: 'return' }],
        yoda: ['error', 'never', { onlyEquality: true }],
    },
};
