import * as Lint from "tslint";
import * as ts from "typescript";
import { RuleFailure } from "tslint";
import { JasmineRuleWalker } from "./JasmineRule";

/**
 * TSLint Check to disallow pending
 *
 * Usage in tslint.json: "no-jasmine-pending": true
 */
export class Rule extends Lint.Rules.AbstractRule {
  /**
   * @param {ts.SourceFile} sourceFile
   * @return {RuleFailure[]}
   */
  apply(sourceFile: ts.SourceFile): RuleFailure[] {
    const disallowedFunctionNames: string[] = [
      'pending',
    ];

    return this.applyWithWalker(
      new JasmineRuleWalker(sourceFile, this.getOptions(), disallowedFunctionNames)
    );
  }
}
