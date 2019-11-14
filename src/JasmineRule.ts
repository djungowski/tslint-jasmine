import * as Lint from "tslint";
import * as ts from "typescript";



export class JasmineRuleWalker extends Lint.RuleWalker {
  /**
   * @param {ts.SourceFile} sourceFile
   * @param {IOptions} options
   */
  constructor(sourceFile: ts.SourceFile, options: Lint.IOptions, private disallowedFunctionNames: string[]) {
    super(sourceFile, options);
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