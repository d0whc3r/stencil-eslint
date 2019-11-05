import { Rule } from 'eslint';
import { decoratorName, getDecorator, LIFECYCLE_METHODS, parseDecorator, stencilComponentContext } from '../utils';

type ComponentOrderEnum = 'element'
    | 'event'
    | 'lifecycle'
    | 'listen'
    | 'method'
    | 'own-method'
    | 'own-prop'
    | 'prop'
    | 'render'
    | 'state'
    | 'watched-prop'
    | 'watched-state';

interface ComponentOrderOptions {
  order: ComponentOrderEnum[];
  followingWatch?: boolean;
  alphabetical?: boolean;
}

const DEFAULTS: ComponentOrderOptions = {
  order: [
    'own-prop',
    'element',
    'state',
    'watched-state',
    'prop',
    'watched-prop',
    'event',
    'lifecycle',
    'listen',
    'method',
    'own-method',
    'render'
  ],
  followingWatch: true,
  alphabetical: true
};

const rule: Rule.RuleModule = {
  meta: {
    docs: {
      description: 'This rule catches not consistently components order.',
      category: 'Possible Errors',
      recommended: true
    },
    schema: [
      {
        type: 'object',
        properties: {
          order: {
            type: 'array',
            items: {
              type: 'string',
              enum: [
                'element',
                'event',
                'lifecycle',
                'listen',
                'method',
                'own-method',
                'own-prop',
                'prop',
                'render',
                'state',
                'watch',
                'watched-prop',
                'watched-state'
              ]
            },
            minLength: 2
          },
          followingWatch: {
            type: 'boolean'
          },
          alphabetical: {
            type: 'boolean'
          }
        }
      }],
    type: 'layout'
  },

  create(context): Rule.RuleListener {
    const stencil = stencilComponentContext();
    const parserServices = context.parserServices;

    const definedProps: string[] = [];
    const definedStates: string[] = [];

    const opts = context.options[0] || {};
    const options: ComponentOrderOptions = { ...opts, ...DEFAULTS };
    let actualOrderIndex = 0;
    // const orderMap = new Map<ComponentOrderEnum, string[]>();
    const orderSet = new Set<ComponentOrderEnum>();

    function getType(body: any): ComponentOrderEnum {
      let type: ComponentOrderEnum | undefined = undefined;
      const decorators = body.decorators && body.decorators.map(decoratorName);
      const name = body.key.name;
      switch (body.type) {
        case 'ClassProperty':
          type = 'own-prop';
          if (decorators && decorators.length) {
            switch (decorators[0]) {
              case 'Element':
                type = 'element';
                break;
              case 'Prop':
                type = 'prop';
                definedProps.push(name);
                break;
              case 'State':
                type = 'state';
                definedStates.push(name);
                break;
              case 'Event':
                type = 'event';
                break;
            }
          }
          break;
        case 'MethodDefinition':
          type = 'own-method';
          if (decorators && decorators.length) {
            const param = parseDecorator(body.decorators[0]);
            switch (decorators[0]) {
              case 'Watch':
                if (definedStates.includes(param[0])) {
                  type = 'watched-state';
                } else if (definedProps.includes(param[0])) {
                  type = 'watched-prop';
                }
                break;
              case 'Listen':
                type = 'listen';
                break;
              case 'Method':
                type = 'method';
                break;
            }
          } else if (name === 'render') {
            type = 'render';
          } else if (LIFECYCLE_METHODS.includes(name)) {
            type = 'lifecycle';
          }
          break;
      }
      return type as ComponentOrderEnum;
    }

    function getActual() {
      const actual = options.order[actualOrderIndex];
      const next = options.order[actualOrderIndex + 1];
      if (['watched-prop', 'watched-state'].includes(next) && options.followingWatch) {
        return [actual, next];
      }
      return [actual];
    }

    function getNext() {
      return options.order[actualOrderIndex + 1];
    }

    function isCorrect(type: ComponentOrderEnum, name: string) {
      const keys = Array.from(orderSet.keys());
      const isActual = type && getActual().includes(type);
      if (isActual) {
        const actuals = new Set(keys[actualOrderIndex]) || [];
      }
      const isNext = getNext() === type;
      if (isNext) {
        const nexts = orderMap.get(type) || [];
        nexts.push(name);
        orderMap.set(type, nexts);
        actualOrderIndex++;
      }
      return isActual || isNext;
    }

    function parseBody(body: any) {
      // const type = getType(body);
      // const name = body.key.name;
      const valid = type && isCorrect(type);
      const originalNode = parserServices.esTreeNodeToTSNodeMap.get(body);
      console.log('body type', type, originalNode.getText(), valid);
    }

    function getTypes(body: any) {
      const type = getType(body);
      // const name = body.key.name;
      orderSet.add(type);
    }

    return {
      'ClassDeclaration': (node: any) => {
        const component = getDecorator(node, 'Component');
        if (component) {
          const originalNode = parserServices.esTreeNodeToTSNodeMap.get(node);
          const { body: { body } } = node;
          body.forEach(getTypes);
          body.forEach(parseBody);
          console.log('node');
        }
      },
      'ClassDeclaration:exit': stencil.rules['ClassDeclaration:exit']
    };
  }
};

export default rule;
