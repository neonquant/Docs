# NeonQuant Telegram Bot User Guide

This guide explains how to use the Telegram bot as an end user.

## What the bot does

The bot gives you market snapshots, sentiment summaries, recent news, and quick asset lookups directly inside Telegram.

## Before you start

- Open the bot in **Telegram**.
- Use the bot in a **private 1-on-1 chat** for the full experience.
- Some market features require an active subscription or redeemed access code.

## Getting started

### 1. Start the bot
Send:

```text
/start
```

This opens the welcome menu and shows the main commands.

### 2. Open the help menu
Send:

```text
/help
```

Use this any time you want a quick list of commands and tips.

## Access and subscription commands

### Subscribe for access
Send:

```text
/subscribe
```

What it does:
- Creates a Stripe checkout link.
- Lets you start paid access to the bot.

### Manage your subscription
Send:

```text
/manage
```

What it does:
- Opens your Stripe billing portal.
- Lets you manage billing or subscription settings.

### Redeem an access code
Send:

```text
/redeem YOUR_CODE
```

Example:

```text
/redeem NQ1-XXXX-XXXX
```

What it does:
- Activates access using a valid code.
- If successful, your access is enabled until the expiration date shown by the bot.

### Check your access status
Send:

```text
/access
```

What it does:
- Shows whether your access is active.
- Shows when your access expires.

## Market commands

### View supported trading pairs
Send:

```text
/pairs
```

What it does:
- Lists supported assets or pairs you can query.
- Helps you see which ticker shortcuts the bot understands.

### See hot high-confidence opportunities
Send:

```text
/hot
```

What it does:
- Shows a shortlist of stronger high-confidence pairs.
- Useful when you want quick ideas without checking assets one by one.

### View overall market sentiment
Send:

```text
/overall
```

What it does:
- Gives you a broad market pulse.
- Summarizes current sentiment and supporting headlines.

### View recent news headlines
Send:

```text
/news
```

What it does:
- Shows general sentiment/news headlines.
- Useful for a wider market view.

### View news for a specific ticker
Send:

```text
/news BTC
```

You can replace `BTC` with another supported ticker.

What it does:
- Filters the news feed for a specific asset.
- Helps you focus on headlines related to the ticker you care about.

## Quick ticker lookups

You can request a premium asset snapshot by typing the ticker as a Telegram command.

Examples:

```text
/btc
/eth
/sol
```

What you get:
- Forecast snapshot
- Sentiment view
- Chart image when available
- Refresh buttons when available

## Sending a ticker without a slash
You can also send a ticker as plain text.

Examples:

```text
BTC
ETH
SOL
```

The bot will try to treat it as an asset lookup and return the matching market snapshot.

## Buttons and refresh actions
Some bot messages include buttons.

You can use them to:
- Refresh a market snapshot
- Open supported pairs
- Open overall sentiment
- Load more headlines in a news feed

## If you do not have access yet
If your subscription is not active, the bot may ask you to use one of these commands first:

```text
/subscribe
/manage
/redeem YOUR_CODE
```

## Best practices

- Use the bot in a private chat.
- Start with `/help` if you are unsure what to do next.
- Use `/pairs` to discover supported assets.
- Use `/overall` for a market-wide read.
- Use `/news BTC` or `/btc` when you want to focus on one asset.

## Quick command reference

```text
/start                  Open the welcome menu
/help                   Show the help menu
/subscribe              Get a Stripe checkout link
/manage                 Open subscription management
/redeem YOUR_CODE       Redeem an access code
/access                 Show your access status
/pairs                  List supported pairs
/hot                    Show hot high-confidence pairs
/overall                Show overall market sentiment
/news                   Show general headlines
/news BTC               Show headlines for a ticker
/btc                    Quick asset snapshot
/eth                    Quick asset snapshot
/sol                    Quick asset snapshot
```

## Simple user flow example

1. Open the bot and send `/start`.
2. If needed, send `/subscribe` or `/redeem YOUR_CODE`.
3. Confirm access with `/access`.
4. Explore the market using `/overall`, `/hot`, or `/pairs`.
5. Check a specific asset with `/btc` or another supported ticker.
6. Read ticker-specific headlines with `/news BTC`.

## Need help?

If a command does not work:
- Try `/help`.
- Make sure you are messaging the bot in a private chat.
- Make sure your subscription or redeemed access is active.
