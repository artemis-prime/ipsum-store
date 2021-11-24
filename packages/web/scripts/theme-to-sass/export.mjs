import fs from 'fs'
import path from 'path'
import stringStream from 'string-to-stream'
import jsonSass from 'json-sass'
import prefix from 'prefix-stream'
import dirname from 'es-dirname'
import generate from './generate.mjs'

const NOTICE = '/* FILE AUTO-GENERATED MATERIAL UI THEME: DO NOT EDIT */\n/* (see script command line in package.json */\n'

// Note: argv[0] and argv[1] are "node" and "<this script's name>" 
const src = process.argv[2]
const dest = process.argv[3]

const sourceAbs = path.join(process.cwd(), src)
const sourceRel = path.relative(dirname(), sourceAbs)
console.log('Material UI to SASS export script.')
console.log('Source: ' + sourceAbs + '...')
console.log('Destination: ' + path.join(process.cwd(), dest) + '...')

const theme = await import(sourceRel)
const result = generate(theme)

/* TEST JSON STEP ONLY 
//console.log(JSON.stringify(result, null, 2))
stringStream(JSON.stringify(result, null, 2))
  .pipe(fs.createWriteStream('./muiThemeMap.json'))
*/

  // Note that all fs related paths are relative to process.cwd(), *not* this file's dir
stringStream(JSON.stringify(result, null, 2))
  .pipe(jsonSass({ prefix: '$map: ' })) // add everything to a single sass map
  .pipe(prefix(NOTICE))
  .pipe(fs.createWriteStream(path.normalize(dest)))