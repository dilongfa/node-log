'use strict'

const { inspect, format } = require('util')

const colors = [2, 3, 4, 5, 6]
let disabledAll = false
let instanceCounter = 0

function getColor() {
    const c = (instanceCounter % colors.length)
    instanceCounter++
    return (c === 0) ? 2 : 2+c
}

//Support colors: white|grey|black|blue|cyan|green|magenta|red|yellow
function sub(namespace, color = '') {
    color = (color === '') ? '3'+this.color : inspect.colors[color][0]
    if (this.namespace) {
        namespace = ':' + namespace
    }
    return exports(`${this.namespace}\u001b[${color};1m${namespace}\u001b[0m`, this.color);
}

function error(...args) {
    args[0] = `\u001b[31;1m${args[0]}\u001b[0m`
    this(...args)
}

function success(...args) {
    args[0] = `\u001b[32;1m${args[0]}\u001b[0m`
    this(...args)
}

function warning(...args) {
    args[0] = `\u001b[33;1m${args[0]}\u001b[0m`
    this(...args)
}

function disable() {
    this.disabled = true
}

function disableAll() {
    disabledAll = true
}

module.exports = exports = (namespace = '', color) => {
    log.disabled = false
    log.namespace = namespace
    log.color = color ? color : getColor()
    log.sub = sub
    log.error = error
    log.success = success
    log.warning = warning

    log.disable = disable
    log.disableAll = disableAll

    function log(...args) {
        if (log.disabled) return
        if (disabledAll) return

        const self = log
    
        // Parse and reformat messages
        if (typeof args[0] !== 'string') {
            args.unshift('%s')
        } else {
            args[0] = args[0].replace(/%([oO])/g, '%s')
        }
    
        for(let i = 1; i < args.length; i++) {
            switch(typeof args[i]) {
                case 'function':
                    args[i] = args[i].toString()
                break
                case 'object':
                    args[i] = (args[i] instanceof Error) ? args[i].stack || args[i].message : inspect(args[i], false, null, true)
                break
            }
        }

        let prefix, str = format(...args)
        
        if (self.namespace) {
            prefix = `\u001b[3${self.color};1m${self.namespace} \u001b[0m`
            str = `${prefix}` + str.split('\n').join('\n' + prefix)
        } 
        
        process.stderr.write(str + '\n')
    }

    return log
}
