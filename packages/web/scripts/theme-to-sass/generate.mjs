const SEP = '-'
let result = {}

const traverse = (key, val) => {
  if (isException(key, val)) {
    traverseException(key, val)
  }
  else if (isArray(val)) {
    traverseArray(key, val)
  } 
  else if (isObject(val)) {
    traverseObject(key, val)
  } 
  else if (typeof val !== 'function') {
    if (key.endsWith('fontFamily')) {
      val = processFontFamilyString(val)
    }
    else if (key.includes('shadows')) {
      val = encloseInQuotes(val)
    }
    result[key] = val
  }
}

const isObject = (val) => ((typeof val === 'object') && (val !== null))

const traverseException = (rootKey, val) => {
  if (rootKey === 'mixins-toolbar') {
    handleToolbar(rootKey, val)
  }
  else if (rootKey === 'typography') {
    handleTypography(rootKey, val)
  }
  else if (rootKey === 'breakpoints') {
    handleBreakpoints(rootKey, val)
  }
}

const handleToolbar = (rootKey, val) => {
//  console.log("TOOLBAR SPECIAL CASE: " + rootKey + "... ")
  if (isObject(val)) {
    const pre = (rootKey.length) ? rootKey + SEP : ''
    for (let key in val) {
      if (val.hasOwnProperty(key)) {
        if (key === 'minHeight') {
          result[pre + "xsUp"] = val[key]
        }
        else if (key.includes('landscape')) {
          result[pre + "landscape"] = val[key].minHeight
        }
        else if (key.includes('min-width:600px')) {
          result[pre + "mdUp"] = val[key].minHeight
        }
      }
    }
  }
}

  // basically strip off the 'values' part of the key
const handleBreakpoints = (rootKey, val) => {
  for (let key in val.values) {
    result[`${rootKey}-${key}`] = val.values[key]
  }
}

const handleTypography = (rootKey, val) => {
  //console.log(`${rootKey}: ${JSON.stringify(val, null, 2)}`)
} 

const processFontFamilyString = (raw) => {
  let arr = raw.split(',')
  arr = arr.map((raw) => {
    const noQuotes = raw.trim().replace(/['"]+/g, '')
    return (noQuotes.includes(' ') ? `'${noQuotes}'` : noQuotes)
  })
  return encloseInQuotes(arr.join(', '))
}

const encloseInQuotes = (raw) => (`"${raw}"`)

const traverseArray = (key, arr) => {
  arr.forEach( (x, i) => {
    traverse(key + `${SEP}${i}`, x)
  })
}

const traverseObject = (rootKey, obj) => {
  const pre = (rootKey.length) ? rootKey + SEP : ''
  for (let key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      traverse(pre + key, obj[key])
    }
  }
}


const isArray = (o) => (Object.prototype.toString.call(o) === '[object Array]')

const isException = (key, val) => {
  if (!key || key==='') return false
  return EXCEPT.reduce((acc, current) => (acc || key === (current)), false)
  
}

const EXCEPT = [
  'breakpoints',
  'mixins-toolbar',
  'direction',
  'palette-type',
  'typography',
  'shadows',
  'transitions',
  'zIndex',
  'props',
  'overrides',
  'ext-menuButton',
  'ext-menuButtonLabel'
]

const generate = (theme) => {
  const toTraverse =  (theme.default) ? theme.default : theme 
  traverse('', toTraverse)
  return result
}


export default generate