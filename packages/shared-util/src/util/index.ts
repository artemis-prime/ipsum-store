import firebase from 'firebase/compat/app'

// https://www.w3resource.com/javascript-exercises/fundamental/javascript-fundamental-exercise-123.php
export const toKebabCase = (str: string): string => {
  const regex = /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g
  const arr: any = (str) ? str.match(regex) : []

  return arr.map(x => x.toLowerCase()).join('-')
}

export const toCamelCase = (str: string): string => {
  return (str.slice(0, 1).toLowerCase() + str.slice(1))
    .replace(/([-_ ]){1,}/g, ' ')
    .split(/[-_ ]/)
    .reduce((cur, acc) => {
      return cur + acc[0].toUpperCase() + acc.substring(1);
    });
}

export const toPascalCase = (str: string): string => {
  return capitalize(toCamelCase(str))
}

export const capitalize = (str: string): string => (
  str.charAt(0).toUpperCase() + str.slice(1)
)

  //str.replace(/([A-Z]+|[A-Z]?[a-z]+)(?=[A-Z]|\b)/g, '!$&').split('!').join(' ')
export const splitCamelOrPascalCase = (str: string): string => {
  const camelCase = str.charAt(0).toUpperCase() + str.slice(1) 
  return camelCase.replace(/([0-9A-Z])/g, ' $&')
}



// https://fettblog.eu/typescript-typing-catch-clauses/
export const errorToString = (e: any): string => {
  let result: string
  if (e instanceof Error) {
    result = e.message
  }
  else if (typeof e === 'string') {
    result = e as string
  }
  else {
    result = e.toString()
  }
  return result
}

    // Format is "CODE403: reason for error"
export const errorToCodeAndMessage = (e: any, defaultCode: number = 400): {code: number, message: string} => {
  let message = errorToString(e)
  let code = defaultCode
  if (message.startsWith('CODE')) {
    const codeStr = message.slice(4, 7)
    code = parseInt(codeStr)    
    message = message.slice(8) // colon
  }
  return {
    code,
    message
  }
}

  // acceptable types:
  // 1) firebase.firestore.Timestamp
  // 2) Date,
  // 3) string that is UTC or whatnot
export const datetimeToDate = (obj: any): Date => {
  if ('nanoseconds' in obj && 'seconds' in obj) {
    return new firebase.firestore.Timestamp(obj.seconds, obj.nanoseconds).toDate()
  }
  else if (!!obj.getDate()) {
    return obj as Date
  }
  return (new Date((typeof obj === 'string')? obj as string : obj.toString()))
}

