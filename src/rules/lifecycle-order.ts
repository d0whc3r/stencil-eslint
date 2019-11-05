import { Rule } from 'eslint';
import { stencilLifecycle, stencilComponentContext } from '../utils';

type SortTypeEnum = 'alphabetical' | 'call-order';
const DEFAULTS = 'call-order';

const rule: Rule.RuleModule = {
  meta: {
    docs: {
      description: 'This rule catches not consistently lifecycle methods order.',
      category: 'Possible Errors',
      recommended: true
    },
    schema: [
      {
        type: 'string',
        enum: ['alphabetical', 'call-order']
      }],
    type: 'layout'
  },

  create(context): Rule.RuleListener {
    const stencil = stencilComponentContext();

    const opts = context.options[0] || {};
    const option: SortTypeEnum = opts || DEFAULTS;
    let order = [...stencilLifecycle];
    if (option === 'alphabetical') {
      order.sort();
    }

    let positionIndex = 0;
    const methodList = new Map<string, any>();

    function filterMethods(node: any) {
      if (!stencil.isComponent()) {
        return;
      }
      const methodName = node.key.name;

      if (stencilLifecycle.includes(methodName)) {
        methodList.set(methodName, node);
      }
    }

    function checkOrder(node: any) {
      if (!stencil.isComponent()) {
        return;
      }
      order = order.filter((method) => methodList.has(method));
      methodList.forEach((methodNode, methodName) => {
        if (methodName !== order[positionIndex]) {
          context.report({
            node: methodNode,
            message: `Stencil lifecycle method "${methodName}" is not in the right place`
          });
        }
        positionIndex++;
      })
    }

    return {
      'ClassDeclaration': stencil.rules.ClassDeclaration,
      'MethodDefinition': filterMethods,
      'ClassDeclaration:exit': (node: any) => {
        stencil.rules['ClassDeclaration:exit'](node);
        checkOrder(node);
      }
    };
  }
};

export default rule;
