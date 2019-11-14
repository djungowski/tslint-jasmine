import * as Lint from "tslint";
import * as ts from "typescript";
import { RuleFailure } from "tslint";
export declare class Rule extends Lint.Rules.AbstractRule {
    apply(sourceFile: ts.SourceFile): RuleFailure[];
}
