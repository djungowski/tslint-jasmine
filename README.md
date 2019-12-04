# tslint-jasmine

A set of [TSLint](https://github.com/palantir/tslint) rules for jasmine

## Note
TSLint will be discontinued in 2020 - the "official" replacement is ESLint. If you want
Jasmine Lint Checks in ESLint, check out [eslint-plugin-jasmine](https://github.com/tlvince/eslint-plugin-jasmine)

## Installation

```bash
npm install tslint-jasmine
```

## Configuration
Add `"node_modules/tslint-jasmine"` under your `"rulesDirectory"` configuration in `tslint.json`:

```json
{
  "rulesDirectory": [
    "node_modules/tslint-jasmine"
  ],
  "rules": {
    "no-jasmine-focus": true,
    "no-jasmine-exclude": true,
    "no-jasmine-pending": true
  }
}
```

### Available rules

| Rule               | What does it do                                             | Since |
| ------------------ | ----------------------------------------------------------- | ----- |
| no-jasmine-focus   | Throws lint error if `fdescribe` or `fit` is used somewhere | 1.0   |
| no-jasmine-exclude | Throws lint error if `xdescribe` or `xit` is used somewhere | 1.0   |
| no-jasmine-pending | Throws lint error if `pending` is used somewhere            | 1.0   |

### Using all rules

In case you want to use all the rules, you can simply extend the ruleset, instead of defining all rules:

```json
{
  "extends": [
    "tslint-jasmine/all"
  ],
  "rulesDirectory": [
    "node_modules/tslint-jasmine"
  ]
}
```

## Changelog

## 1.0.2

- Bugfix: rules should only check jasmine functions (#1)

### 1.0.1

- Readme fixes

### 1.0

- Initial release with `no-jasmine-focus`, `no-jasmine-exclude` and `no-jasmine-pending` rules and `all` ruleset