module.exports = {
    extends: ['airbnb-typescript', 'airbnb/hooks', 'plugin:@typescript-eslint/recommended', 'prettier'],
    plugins: ['react', '@typescript-eslint', 'prettier', 'unused-imports'],
    env: {
        browser: true,
        es6: true,
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2020,
        sourceType: 'module',
        project: './tsconfig.json',
    },
    rules: {
        'linebreak-style': 'off',
        'import/prefer-default-export': 'off',
        'import/no-default-export': 'error',
        'no-console': 'off',
        'prettier/prettier': [
            'error',
            {
                tabWidth: 4,
            },
        ],
        '@typescript-eslint/no-namespace': 'off',
        '@typescript-eslint/naming-convention': 'off',
        '@typescript-eslint/no-throw-literal': 'off',
        'react/jsx-key': 'error',
        'react/no-danger': 'off',
        'react/prop-types': 'off',
        'react/jsx-props-no-spreading': 'off',
        'react/require-default-props': [
            'warn',
            {
                ignoreFunctionalComponents: true,
            },
        ],
        'jsx-a11y/label-has-associated-control': [
            'error',
            {
                required: {
                    some: ['nesting', 'id'],
                },
            },
        ],
        'no-underscore-dangle': 'off',
        '@typescript-eslint/no-base-to-string': 'error',
        '@typescript-eslint/no-unnecessary-type-constraint': 'off',
        'jsx-a11y/label-has-for': 'off',
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        'unused-imports/no-unused-imports': 'error',
        'unused-imports/no-unused-vars': [
            'warn',
            {
                vars: 'all',
                varsIgnorePattern: '^_',
                args: 'after-used',
                argsIgnorePattern: '^_',
            },
        ],
    },
    overrides: [
        {
            files: ['vite.config.ts'],
            parserOptions: {
                project: './tsconfig.node.json',
            },
            rules: {
                'import/no-default-export': 'off',
                'import/no-extraneous-dependencies': 'off',
            },
        },
    ],
};
