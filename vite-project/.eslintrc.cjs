module.exports = {
    env: {
      browser: true,
      es2021: true,
    },
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:react/recommended',
    ],
    overrides: [
      {
        env: {
          node: true,
        },
        files: ['.eslintrc.{js,cjs}'],
        parserOptions: {
          sourceType: 'script',
        },
      },
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
    },
    plugins: ['@typescript-eslint', 'react'],
    rules: {
    'react/jsx-uses-react': 'error',

    // Informar quando o React não está sendo usado em arquivos JSX
    'react/react-in-jsx-scope': 'error',
      // Padronizar aspas simples
      quotes: ['error', 'single'],
  
      // Exigir ponto e vírgula no final das linhas
      semi: ['error', 'always'],
  
      // Habilitar quebra de linha automática (Unix-style) para tags JSX
      'linebreak-style': ['error', 'unix'],
  
      // Exigir que as tags JSX estejam alinhadas corretamente
      'react/jsx-closing-tag-location': 'error',
  
      // Alinhar e quebrar automaticamente as tags JSX com atributos
      'react/jsx-wrap-multilines': [
        'error',
        {
          declaration: 'parens-new-line',
          assignment: 'parens-new-line',
          return: 'parens-new-line',
          arrow: 'parens-new-line',
          condition: 'parens-new-line',
          logical: 'parens-new-line',
          prop: 'parens-new-line',
        },
      ],
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  };
  