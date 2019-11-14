import * as Lint from "tslint";
import * as ts from "typescript";
import { RuleFailure } from "tslint";
import { JasmineRuleWalker } from "./JasmineRule";

/**
 * TSLint Check to disallow xdescribe and xit
 *
 * Usage in tslint.json: "no-jasmine-exclude": true
 */
export class Rule extends Lint.Rules.AbstractRule {
  /**
   * @param {ts.SourceFile} sourceFile
   * @return {RuleFailure[]}
   */
  apply(sourceFile: ts.SourceFile): RuleFailure[] {
    const disallowedFunctionNames: string[] = [
      'xdescribe',
      'xit'
    ];

    return this.applyWithWalker(
      new JasmineRuleWalker(sourceFile, this.getOptions(), disallowedFunctionNames)
    );
  }
}
