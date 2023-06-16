<div align="center">

# Utils

A simple, lightweight package made for Discord.js Devs for ease of Development.

[![npm](https://img.shields.io/npm/v/@arijitthedev/utils?color=crimson&logo=npm&style=flat-square)](https://www.npmjs.com/package/@arijitthedev/utils)

</div>

## Features

- Written in Plain JS
- Offers CJS for easy development
- Simple and Easy to Use
- Lightweight

## Installation

`@arijitthedev/utils` depends on Node JS. Make sure to install latest version of Node JS before installing this package. After that, run the following command:

```bash
npm install @arijitthedev/utils
```

## Uses

Here are some basic examples of the methods available:

#### Logger Class:

```js
const { Logger } = require("@arijitthedev/utils")

const logger = new Logger()

logger.info("Info Message")
logger.success("Success Message")
logger.warn("Warn Message")
logger.error("Error Message")
```

#### Banner Class:

```js
const { Banner } = require("@arijitthedev/utils")

const banner = new Banner()
banner.create("N A M E")
```

### Developed by:

Arijit Debnath
- https://arijitdn.com