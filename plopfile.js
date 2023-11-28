module.exports = function (plop) {
  // page generator
  plop.setGenerator('page', {
    description: 'Creates application page',
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
        destination: 'src/pages/{{name}}',
        templateFiles: 'plop-templates/pages/*.hbs',
        base: 'plop-templates/pages',
        stripExtensions: ['hbs'],
      },
    ],
  })

  plop.setGenerator('component', {
    description: 'Creates application component',
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
        destination: 'src/components/{{name}}',
        templateFiles: 'plop-templates/components/*.hbs',
        base: 'plop-templates/components',
        stripExtensions: ['hbs'],
      },
      {
        type: 'modify',
        path: 'src/components/index.ts',
        template: 'export { {{name}} } from "./{{ name }}/{{ name }}.component";\n$1',
        pattern: /(\/\/ Export all components)/g,
      },
    ],
  })

  plop.setGenerator('contexts', {
    description: 'Creates application contexts',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Context name: ',
      },
    ],
    actions: [
      {
        type: 'addMany',
        destination: 'src/contexts/{{name}}',
        templateFiles: 'plop-templates/contexts/*.hbs',
        base: 'plop-templates/contexts',
        stripExtensions: ['hbs'],
      },
    ],
  })

  plop.setGenerator('service', {
    description: 'Creates application services',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Service name: ',
      },
      {
        type: 'input',
        name: 'type',
        message: 'Service type: ',
      },
    ],
    actions: [
      {
        type: 'addMany',
        destination: 'src/services/client/{{type}}/{{name}}',
        templateFiles: 'plop-templates/services/*.hbs',
        base: 'plop-templates/services',
        stripExtensions: ['hbs'],
      },
    ],
  })
}
