# @amille/eslint-config

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


[eslint]: https://www.npmjs.com/package/eslint
[prettier]: https://www.npmjs.com/package/prettier
