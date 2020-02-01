# @amille/eslint-config

![npm](https://img.shields.io/npm/v/@amille/eslint-config)
![CircleCI](https://img.shields.io/circleci/build/github/amille44420/eslint-config)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

Eslint and prettier configuration (inspired by [@thetribe/eslint-config][thetribe-eslint-config])

[thetribe-eslint-config]: https://www.npmjs.com/package/@thetribe/eslint-config

## Installation

First you need to install [eslint] and [prettier].

Then install `@amille/eslint-config`.

```sh
# using npm
npm install --save-dev @amille/eslint-config

# or using yarn
yarn add -D @amille/eslint-config
```


Then create a file named `.eslintrc.json` with following contents in the root folder of your project:

```json
{
    "root": true,
    "extends": ["@amille/eslint-config"]
}
```
Then creat a file named `.prettierrc.json` along side the previous file, with the following contents.

```json
"@amille/eslint-config"
```

## Variants

This package comes with two configurations

#### Default

The default configuration is based on `airbnb-base` and `prettier`.

```json
{
    "extends": ["@amille/eslint-config"]
}
```

#### React

The react configuration is based on `airbnb`, `prettier` and `prettier/react`.

```json
{
    "extends": ["@amille/eslint-config/react"]
}
```

[eslint]: https://www.npmjs.com/package/eslint
[prettier]: https://www.npmjs.com/package/prettier
