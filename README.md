# posthtml-plugin-template <img align="right" width="220" height="200" title="PostHTML logo" src="http://posthtml.github.io/posthtml/logo.svg">

[![Build][build]][build-badge]

> Template for authoring PostHTML plugins in TypeScript.

Inspired by the [posthtml-plugin-boilerplate](https://github.com/posthtml/posthtml-plugin-boilerplate), this template is used to develop and build [PostHTML](https://github.com/posthtml) plugins with TypeScript.

The `posthtml-plugin-boilerplate` contains an excellent sample [README](https://github.com/posthtml/posthtml-plugin-boilerplate/blob/master/readme.md) to describe and document a plugin.

Don't forget to update the [changelog](CHANGELOG.md) for each release published to the [npm registry](https://www.npmjs.com/).

## Available Scripts

### `yarn test`

Runs unit tests using tape as a test runner.

### `yarn test:tdd`

Runs all tests in watch mode.

### `yarn prepack`

Builds the plugin for production.

## Publishing to npm

When publishing your plugin for the first time, be sure to update the `homepage`, `repository` and `bugs` fields in the `package.json`. Login as your npm user and run the following:

```bash
yarn publish
# OR
npm publish
```

Update the relevant publishing-related fields in [package.json](package.json).

```json
{
  "repository": {
    "type": "git",
    "url": "https://github.com/{USER}/posthtml-plugin-template.git"
  },
  "homepage": "https://github.com/{USER}/posthtml-plugin-template",
  "keywords": ["posthtml", "posthtml plugin", "plugin"],
  "bugs": "https://github.com/{USER}/posthtml-plugin-template/issues"
}
```

## License

[MIT](LICENSE)

[build]: https://travis-ci.com/metonym/posthtml-plugin-template.svg?branch=master
[build-badge]: https://travis-ci.com/metonym/posthtml-plugin-template
