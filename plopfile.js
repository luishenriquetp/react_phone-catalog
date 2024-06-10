// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default function (plop) {
  plop.setGenerator('component', {
    description: 'component files generator',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Component name: ',
      },
    ],
    actions: [
      {
        type: 'addMany',
        destination: 'src/components/{{pascalCase name}}',
        templateFiles: 'plop-templates/component/*.hbs',
        base: 'plop-templates/component',
      },
    ],
  });

  plop.setGenerator('page', {
    description: 'page files generator',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Page name: ',
      },
    ],
    actions: [
      {
        type: 'addMany',
        destination: 'src/pages/{{pascalCase name}}',
        templateFiles: 'plop-templates/page/*.hbs',
        base: 'plop-templates/page',
      },
    ],
  });
}
