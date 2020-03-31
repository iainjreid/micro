'use strict'

const base = require("@emphori/micro-base").default

const arityMap = new WeakMap()

arityMap.set(Array.prototype.reduce, 3)

module.exports = new Proxy(global, {
  get(obj, prop) {
    if (obj[prop] && obj[prop].prototype) {
      return wrap(obj[prop])
    }
  }
})

  
function wrap(target) {
  return new Proxy(target.prototype, {
    get(obj, prop) {
      if (obj[prop]) {
        return base((data, ...args) => {
          return obj[prop].apply(data, args.reverse())
        }).F.N(arityMap.get(obj[prop]) || obj[prop].length + 1)
      } else {
        throw (`Unknown method '${prop}' on object '${target.name}'`)
      }
    }
  })
}

