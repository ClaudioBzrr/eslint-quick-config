module.exports ={
    env: {
        browser: true,
        es2021: true
    },
    settings: {
        react:{
            version:'detect'
        }
    },
    extends: [
        'prettier',
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'plugin:prettier/recommended'
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    plugins: [
        '@typescript-eslint',
        'react'
    ],
    rules: {
        '@typescript-eslint/no-explicit-any':'off',
        'react/react-in-jsx-scope': 'off',
        'prettier/prettier':['error',{
            printWidth: 80,
            tabWidth: 2,
            singleQuote: true,
            trailingComma: 'all',
            arrowParens: 'always',
            semi: true,
            endOfLine: 'auto'
        }]
    }
}