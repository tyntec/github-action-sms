<p align="center">
  <a href="https://github.com/tyntec/github-action-sms/actions"><img alt="tyntec SMS action status" src="https://github.com/tyntec/github-action-sms/workflows/Build/badge.svg"></a>
</p>

# tyntec SMS GitHub Action

This action sends an SMS using tyntec SMS API.

## Inputs

### `fromPhoneNumber`

**Required** The identification of the party sending the SMS. It can either be a phone number in the international format or an alphanumeric identifier with up to 11 characters.

### `toPhoneNumber`

**Required** The phone number to send the SMS to in the international phone format E.164.

### `message`

**Required** The message you want to send.

## Environment variables (secrets)

### `TYNTEC_API_KEY`

**Required** Your tyntec API key.

## Outputs

### `requestId`

The unique identifier provided for each messaging request.

## Example usage

```yaml
uses: tyntec/github-action-sms@main
with:
  fromPhoneNumber: tyntec
  toPhoneNumber: +123456789
  message: Hello world!
env:
  TYNTEC_API_KEY: ${{ secrets.TYNTEC_API_KEY }}
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
