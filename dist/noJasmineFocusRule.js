"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Lint = require("tslint");
var Rule = (function (_super) {
    __extends(Rule, _super);
    function Rule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rule.prototype.apply = function (sourceFile) {
        return this.applyWithWalker(new JasmineWalker(sourceFile, this.getOptions()));
    };
    return Rule;
}(Lint.Rules.AbstractRule));
exports.Rule = Rule;
var JasmineWalker = (function (_super) {
    __extends(JasmineWalker, _super);
    function JasmineWalker(sourceFile, options) {
        var _this = _super.call(this, sourceFile, options) || this;
        _this.disallowedFunctionNames = [
            'fdescribe',
            'fit'
        ];
        return _this;
    }
    JasmineWalker.prototype.visitIdentifier = function (node) {
        if (this.isFunctionNameDisallowed(node.text)) {
            this.addFailure(this.createFailure(node.getStart(), node.getWidth(), node.text + " not allowed"));
        }
    };
    JasmineWalker.prototype.isFunctionNameDisallowed = function (functionName) {
        return this.disallowedFunctionNames.indexOf(functionName) !== -1;
    };
    return JasmineWalker;
}(Lint.RuleWalker));
//# sourceMappingURL=noJasmineFocusRule.js.map