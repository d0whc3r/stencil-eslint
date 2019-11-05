import rule from '../../../../src/rules/ban-exported-const-enums';
import { ruleTester } from '../rule-tester';
import * as path from 'path';
import * as fs from 'fs';

describe('stencil rules', () => {
  const files = {
    good: path.resolve(__dirname, 'ban-exported-const-enums.good.tsx'),
    wrong: path.resolve(__dirname, 'ban-exported-const-enums.wrong.tsx')
  };
  ruleTester.run('ban-exported-const-enums', rule, {
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
