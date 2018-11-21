# log
A tiny logging utility for NodeJS. It can be used instead of `console.log`

## Installation
```
npm i @dilongfa/log
```

## 1. Basic usage
```js
const log = require('@dilongfa/log')()
log('Visit the website')
```
Output
```
Visit the website
```

## 2. Usage with namespace
```js
const log = require('@dilongfa/log')('myapp:')
log('Visit the website')
```
Output
```
myapp: Visit the website
```

## 3. Usage with sub namespace
```js
const log = require('@dilongfa/log')('myapp')
const logGet = log.sub('get')
log('Visit the website')
logGet('Getting data')
```
Output
```
myapp: Visit the website
myapp:get Getting data 
```

## 4. Usage with sub namespace and custom color
```js
const log = require('@dilongfa/log')('myapp')
const logGet = log.sub('get', 'red')
log('Visit the website')
logGet('Getting data')
```
Output
```
myapp: Visit the website
myapp:get Getting data 
```

## 5. Disable output per namespace
```js
const log = require('@dilongfa/log')('myapp')
const logGet = log.sub('get', 'red')

log.disable()
logGet.disable()

log('Visit the website')
logGet('Getting data')
```
Output
```
```

## 5. Disable all output
```js
const log = require('@dilongfa/log')('myapp')
const logGet = log.sub('get', 'red')

log.disableAll()

log('Visit the website')
logGet('Getting data')
```
Output
```
```

# License
MIT License

Copyright (c) 2018 DiLong Fa <dilongfa@gmail.com>

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
