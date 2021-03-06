# log
A tiny logging utility for NodeJS. It can be used instead of `console.log`

# Installation
```bash
npm install @dilongfa/log
```
# Usage
## Basic
```js
const log = require('@dilongfa/log')()

log('Visit the website')
```

## With namespace
```js
const log = require('@dilongfa/log')('app')

log('Visit the website')
```

## With custom subnamespace
```js
const log = require('@dilongfa/log')('app')
const logGet = log.sub('get')

log('Visit the website')
logGet('Getting data')
```

## Subnamespace with custom color
```js
const log = require('@dilongfa/log')('app')
const logGet = log.sub('get', 'red')

log('Visit the website')
logGet('Getting data')
```

## Some common functions 
```js
const log = require('@dilongfa/log')('app')

log('Visit the website')
log.error('Error message')
log.success('Success message')
log.warning('Warning message')
```

# License
MIT License

Copyright (c) 2018 DiLong-Fa &lt;dilongfa@gmail.com&gt;

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
