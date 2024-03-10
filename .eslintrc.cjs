module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['standard-with-typescript', 'plugin:react/recommended'],
  settings: {
    react: {
      version: 'detect'
    }
  },
  overrides: [
    {
      env: {
        node: true
      },
      files: [
        'src/**/*.ts',
        'src/**/*.tsx',
        'src/**/*.js',
        'src/**/*.jsx',
        './**.html'
      ],
      parserOptions: {
        sourceType: 'script'
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    project: ['./tsconfig.json', '!./.eslintrc.cjs'],
    sourceType: 'module'
  },
  plugins: ['react'],
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/space-before-function-paren': 'off',
    'react/react-in-jsx-scope': 'off'
  }
}
