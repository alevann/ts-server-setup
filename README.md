# webapp 
[![CI Tests](https://github.com/alevann/webapp/actions/workflows/main.yaml/badge.svg?branch=base-server-setup)](https://github.com/alevann/webapp/actions/workflows/main.yaml)

# Adding a module aliases

To add a module alias start by adding it to `tsconfig.json` as such:
```js
{
    "compilerOptions": {
        // ...
        "paths": {
            "alias-name/*": ["./alias/path/*"],
        },
    }
}
```
Note that the path must be relative to the `baseUrl` field.

Then update `package.json` to ensure `module-alias` will correct the path at runtime:
```json
{
    "_moduleAliases": {
        "alias-name": "./alias/path",
    }
}
```

Lastly for the alias to work during tests you'll need to update `jest.config.js` to include your alias in the module mapper:
```js
module.exports = {
    // ...
    moduleNameMapper: {
        'your-alias/(.*)': '<rootDir>/some/path/$1'
    }
}
```
