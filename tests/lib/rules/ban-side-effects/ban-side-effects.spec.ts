import rule from '../../../../src/rules/ban-side-effects';
import { ruleTester } from '../rule-tester';
import * as path from 'path';
import * as fs from 'fs';

describe('stencil rules', () => {
  const files = {
    good: path.resolve(__dirname, 'ban-side-effects.good.tsx'),
    wrong: path.resolve(__dirname, 'ban-side-effects.wrong.tsx')
  };
  ruleTester.run('ban-side-effects', rule, {
    valid: [
      {
        code: fs.readFileSync(files.good, 'utf8'),
        filename: files.good
      }
    ],

    invalid: [
      {
        code: fs.readFileSync(files.wrong, 'utf8'),
        filename: files.wrong,
        errors: 1
      }
    ]
  });
});
