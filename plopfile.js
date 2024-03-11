module.exports = function (plop) {
  plop.setHelper('extraCurly', t => `{${t}}`);
  plop.setGenerator('screen', {
    description: 'Create a screen',
    prompts: [
      {
        type: 'input',
        name: 'screen',
        message: 'What is your screen name?',
      },
    ],
    actions: [
      /**========== Create screen ==========*/
      {
        path: 'src/App.tsx',
        pattern: '{/** SCREEN */}',
        template:
          '<Stack.Screen name="{{pascalCase screen}}" component={{extraCurly (pascalCase screen) }} />\n        {/** SCREEN */}',
        type: 'modify',
      },
      {
        path: 'src/App.tsx',
        pattern: /(\/\/ IMPORT)/g,
        template: '$1\n  {{pascalCase screen}},',
        type: 'modify',
      },
      // {
      //   path: 'src/constants/navigation.ts',
      //   pattern: /(\/\/ SCREEN)/g,
      //   template: "{{camelCase screen}}: '{{pascalCase screen}}',\n  $1",
      //   type: 'modify',
      // },
      // {
      //   path: 'src/screens/index.ts',
      //   pattern: /(\/\/ SCREEN IMPORTS)/g,
      //   template:
      //     "export { {{pascalCase screen}} } from '../screens/{{pascalCase screen}}/{{pascalCase screen}}';\n$1",
      //   type: 'modify',
      // },
      // {
      //   type: 'add',
      //   path: 'src/screens/{{pascalCase screen}}/{{pascalCase screen}}.tsx',
      //   templateFile: 'templates/screen.hbs',
      // },
      // {
      //   type: 'add',
      //   path: 'src/screens/{{pascalCase screen}}/{{pascalCase screen}}.styles.ts',
      //   templateFile: 'templates/styles.hbs',
      // },
      // {
      //   type: 'add',
      //   path: 'src/screens/{{pascalCase screen}}/hooks/use{{pascalCase screen}}.ts',
      //   templateFile: 'templates/hook.hbs',
      // },
    ],
  });
  plop.setGenerator('component', {
    description: 'Generate a new React Native component',
    prompts: [
      {
        type: 'input',
        name: 'component',
        message: 'Enter component name:',
      },
    ],
    actions: [
      {
        path: 'src/components/index.ts',
        pattern: /(\/\/ IMPORTS)/g,
        template:
          "import {{pascalCase component}} from '../components/{{pascalCase component}}/{{pascalCase component}}';\n$1",
        type: 'modify',
      },
      {
        path: 'src/components/index.ts',
        pattern: /(\/\/ COMPONENTS)/g,
        template: '{{pascalCase component}},\n  $1',
        type: 'modify',
      },
      {
        type: 'add',
        path: 'src/components/{{pascalCase component}}/{{pascalCase component}}.tsx',
        templateFile: 'templates/component.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{pascalCase component}}/{{pascalCase component}}.styles.ts',
        templateFile: 'templates/styles.hbs',
      },
    ],
  });
  plop.setGenerator('redux', {
    description: 'Generate a new Redux slice',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Enter slice name:',
      },
    ],
    actions: [
      {
        path: 'src/redux/index.ts',
        pattern: /(\/\/ REDUCERS)/g,
        template: '{{pascalCase name}}: {{pascalCase name}}Reducer,\n  $1',
        type: 'modify',
      },
      {
        path: 'src/redux/index.ts',
        pattern: /(\/\/ IMPORTS)/g,
        template:
          "import {{pascalCase name}}Reducer from './slices/{{camelCase name}}Slice';\n$1",
        type: 'modify',
      },
      {
        type: 'add',
        path: 'src/redux/slices/{{name}}Slice.ts',
        templateFile: 'templates/reduxSlice.hbs',
      },
    ],
  });
};
