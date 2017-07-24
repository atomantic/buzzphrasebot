# Buzzphrase Bot

A symbiotic no-ops solution for cryptorandom value-add:

https://twitter.com/buzzphrasebot

## Development

```
git clone git@github.com:atomantic/buzzphrasebot.git
cd buzzphrasebot
npm run setup
```

You'll also need to populate an .env file with the following information from the app associated with the bot account.
```
TWITTER_BPB_CLIENT={Consumer Key (API Key)}
TWITTER_BPB_SECRET={Consumer Secret (API Secret)}
TWITTER_BPB_ATOKEN={Access Token}
TWITTER_BPB_ASECRET={Access Token Secret}
```

## Deploy

https://zeit.co

```
npm i -g now
now
```
