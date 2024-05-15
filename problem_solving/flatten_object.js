let obj = {
  a: '13',
  b: {
    c: 1,
    d: {
      f: 11,
    },
  },
}

// { 'a': "13", 'b.c': 1, 'b.d.f': 11 }

function flattenObject(obj, keyName, resultObj = {}) {
  Object.keys(obj).forEach(key => {
    if (typeof obj[key] !== 'object') {
      if (keyName) {
        resultObj[`${keyName}.${key}`] = obj[key]
      } else {
        resultObj[`${key}`] = obj[key]
      }
    } else {
      if (keyName) {
        flattenObject(obj[key], `${keyName}.${key}`, resultObj)
      } else {
        flattenObject(obj[key], `${key}`, resultObj)
      }
    }
  })
  return resultObj
}

const myFlatten = (obj, parentKey) => {
  let res = []
  for (const key in obj) {
    //check if value of the key is an object and recursively call fn
    if (typeof obj[key] === 'object' && obj[key] !== null) {
      const nestedKeys = myFlatten(obj[key], `${parentKey}${key}.`)
      res = { ...res, ...nestedKeys }
    } else {
      //else store the key value pair with res
      res[`${parentKey}${key}`] = obj[key]
    }
  }
  return res
}

const res = myFlatten(obj, '')
console.log('🚀 ~ res:', res)
