import rule from '../../../../src/rules/lifecycle-order';
import { ruleTester } from '../rule-tester';
import * as path from 'path';
import * as fs from 'fs';

describe('stencil rules', () => {
  const files = {
    good1: path.resolve(__dirname, 'lifecycle-order.alphabetical.good.tsx'),
    good2: path.resolve(__dirname, 'lifecycle-order.call-order.good.tsx'),
    wrong: path.resolve(__dirname, 'lifecycle-order.wrong.tsx')
  };
  ruleTester.run('lifecycle-order', rule, {
    valid: [
      {
        code: fs.readFileSync(files.good1, 'utf8'),
        options: ['alphabetical'],
        filename: files.good1
      },
      {
        code: fs.readFileSync(files.good2, 'utf8'),
        options: ['call-order'],
        filename: files.good2
      }
    ],

    invalid: [
      {
        code: fs.readFileSync(files.wrong, 'utf8'),
        filename: files.wrong,
        errors: 2
      }
    ]
  });
});
