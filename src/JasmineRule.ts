import * as Lint from "tslint";
import * as ts from "typescript";

type NodeObject = ts.Identifier & {
  expression: ts.Identifier;
  parent: NodeObject;
};

export class JasmineRuleWalker extends Lint.RuleWalker {
  /**
   * @param {ts.SourceFile} sourceFile
   * @param {IOptions} options
   */
  constructor(
    sourceFile: ts.SourceFile,
    options: Lint.IOptions,
    private readonly disallowedFunctionNames: string[]
  ) {
    super(sourceFile, options);
  }

  /**
   * Callback that is called by tslint when an identifier is called
   * The identifier are the called functions
   *
   * @param {NodeObject} node
   */
  visitIdentifier(node: NodeObject): void {
    if (
      this.isFunctionNameDisallowed(node.text) &&
      this.isFunctionFromJasmine(node)
    ) {
      this.addFailure(
        this.createFailure(
          node.getStart(),
          node.getWidth(),
          `${node.text} not allowed`
        )
      );
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

  /**
   * Check if function is manually declared property
   *
   * @param {NodeObject}
   * @return {boolean}
   */
  isFunctionFromJasmine(node: NodeObject): boolean {
    return node.escapedText === node.parent.expression.escapedText;
  }
}
