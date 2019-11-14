import * as Lint from "tslint";
import * as ts from "typescript";
import { IOptions, RuleFailure } from "tslint";

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
    return this.applyWithWalker(new JasmineWalker(sourceFile, this.getOptions()));
  }
}

class JasmineWalker extends Lint.RuleWalker {
  private disallowedFunctionNames: string[];

  /**
   * @param {ts.SourceFile} sourceFile
   * @param {IOptions} options
   */
  constructor(sourceFile: ts.SourceFile, options: IOptions) {
    super(sourceFile, options);

    this.disallowedFunctionNames = [
      'fdescribe',
      'fit'
    ];
  }

  /**
   * Callback that is called by tslint when an identifier is called
   * The identifier are the called functions
   *
   * @param {ts.Identifier} node
   */
  visitIdentifier(node: ts.Identifier): void {
    if (this.isFunctionNameDisallowed(node.text)) {
      this.addFailure(this.createFailure(node.getStart(), node.getWidth(), `${node.text} not allowed`));
    }
  }

  /**
   * Check if a given function is not allowed
   *
   * @param {string} functionName
   * @return {boolean}
   */
  isFunctionNameDisallowed(functionName: string): boolean {
    return this.disallowedFunctionNames.indexOf(functionName) !== -1;
  }
}