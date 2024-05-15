const input = {
  name: 'Jay',
  age: 25,
  department: {
    name: 'Customer Experience',
    section: 'Technical',
    branch: {
      name: 'Bangalore',
      timezone: 'IST',
    },
  },
  company: {
    name: 'SAP',
    customers: ['Ford', 'Nestle'],
  },
  skills: ['javascript', 'node.js', 'html'],
}

console.log(input)

// Write a Function getValue that will take a dot string and an object and it will return its value in object

// If value doesn’t exist return undefined

let nestedObject = {
  a: {
    b: {
      c: {
        d: 'Hello D',
      },
    },
  },
}
let nestedObject2 = {
  a: {
    b: {
      c: {
        d: 'Hello D',
      },
    },
  },
}

// getValue(nestedObject, "a.b.c.d"); // OP: "Hello D"
// getValue(nestedObject2, "a.b.c.d.E"); // OP: undefined
//  console.log(nestedObject.a.b.c.d)

const getValueMy = (obj, dotString) => {
  const keys = dotString.split('.')

  let finalObj = obj

  for (const key of keys) {
    if (typeof finalObj === 'object' && key in finalObj && finalObj != null) {
      finalObj = finalObj[key]
    } else {
      return undefined
    }
  }
  return finalObj
}

const res = getValueMy(nestedObject, 'a.b.c.d') // OP: "Hello D"

/*
*S Framework related (React JS & Vue JS) Qs:*

1. useState, useEffect
  -  Is useState sync or async
  -  when does the useEffect runs
2. Vue JS vs React JS
3. Vue directives
4. v-if vs v-show
5. Watchers in Vue
6. Lifecycle Hooks in Vue

*/
