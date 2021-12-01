const warnInDevelopment =
  process.env.NODE_ENV === 'production' ? 'error' : 'warn';

module.exports = {
  plugins: ['promise'],

  extends: [
    'next/core-web-vitals',
    'airbnb',
    'airbnb/hooks',
    'plugin:promise/recommended',
  ],

  ignorePatterns: ['node_modules/*', 'public/*', 'build/*'],

  rules: {
    // ? allow debugger and console statement in development
    'no-debugger': warnInDevelopment,
    'no-console': warnInDevelopment,
    'arrow-body-style': 'off',
    // ? for use with redux-toolkit (immer)
    'no-param-reassign': [
      'error',
      {
        ignorePropertyModificationsFor: ['state'],
        props: true,
      },
    ],
    'no-unused-expressions': 'warn',
    'no-unused-vars': [
      warnInDevelopment,
      {
        args: 'none',
        vars: 'all',
      },
    ],
    'operator-linebreak': 'off',
    // ? git handles this instead
    'linebreak-style': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/prop-types': 'off',
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    // ? react 17+ doesn't need this
    'react/react-in-jsx-scope': 'off',
    'react-hooks/exhaustive-deps': 'warn',
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    'import/prefer-default-export': 'off',
  },
};
