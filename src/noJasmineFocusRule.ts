import * as Lint from "tslint";
import * as ts from "typescript";
import { RuleFailure } from "tslint";
import { JasmineRuleWalker } from "./JasmineRule";

/**
 * TSLint Check to disallow fdescribe and fit
 *
 * Usage in tslint.json: "no-jasmine-focus": true
 */
export class Rule extends Lint.Rules.AbstractRule {
  /**
   * @param {ts.SourceFile} sourceFile
   * @return {RuleFailure[]}
   */
  apply(sourceFile: ts.SourceFile): RuleFailure[] {
    const disallowedFunctionNames: string[] = [
      'fdescribe',
      'fit'
    ];

    return this.applyWithWalker(
      new JasmineRuleWalker(sourceFile, this.getOptions(), disallowedFunctionNames)
    );
  }
}
