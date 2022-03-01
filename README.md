<p align="center">
  <a href="https://github.com/tyntec/github-action-sms/actions"><img alt="tyntec SMS action status" src="https://github.com/tyntec/github-action-sms/workflows/build-test/badge.svg"></a>
</p>

# tyntec SMS GitHub Action

This action blocks the given number of milliseconds. To learn how this action was built, see "[Create a JavaScript Action using TypeScript](https://github.com/actions/typescript-action)".

## Inputs

### `milliseconds`

**Required** The number of milliseconds to block.

## Outputs

### `time`

The time the action stopped.

## Example usage

```yaml
uses: tyntec/github-action-sms@main
with:
  milliseconds: 1000
```

## Development

Install the dependencies  
```bash
$ npm install
```

Build the typescript and package it for distribution
```bash
$ npm run build && npm run package
```

Run the tests :heavy_check_mark:  
```bash
$ npm test

 PASS  ./main.test.js
  ✓ throws invalid number (3ms)
  ✓ wait 500 ms (504ms)
  ✓ test runs (742ms)

...
```

## Publish to a distribution branch

Actions are run from GitHub repos so we will checkin the packed dist folder. 

Then run [ncc](https://github.com/zeit/ncc) and push the results:
```bash
$ npm run package
$ git add dist
$ git commit -a -m "prod dependencies"
$ git push origin releases/v1
```

Your action is now published! :rocket: 

## Usage

After testing you can [create a v1 tag](https://github.com/actions/toolkit/blob/master/docs/action-versioning.md) to reference the stable and latest V1 action
