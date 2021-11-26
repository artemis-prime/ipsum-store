//import { Timestamp as ServerTimestamp } from '@google-cloud/firestore' // leave as is
import { Timestamp as WebTimestamp} from '@firebase/firestore'


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
  // 1) firestore.Timestamp,
  // 2) Date,
  // 3) string that is UTC ish
export const datetimeToDate = (
  obj: any,
  isWeb: boolean 
): Date => {

  if ('nanoseconds' in obj && 'seconds' in obj) {

    if (!isWeb) {
      throw new Error('datetimeToDate(): server side use not supported.')
    }
    return new WebTimestamp(obj.seconds, obj.nanoseconds).toDate()
    /*
    return (isWeb) ? 
      new WebTimestamp(obj.seconds, obj.nanoseconds).toDate() 
      :
      new ServerTimestamp(obj.seconds, obj.nanoseconds).toDate() 
    */
  }
  else if (!!obj.getDate()) {
    return obj as Date
  }
  return (new Date((typeof obj === 'string')? obj as string : obj.toString()))
}