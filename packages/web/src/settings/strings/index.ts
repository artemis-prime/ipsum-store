import Strings from '~/util/Strings'

export const APP_NAME = 'Ipsum Messages'
const inst = new Strings([
  ['appTitleShortLower', 'ipsum'],
  ['appTitleShortCaps', APP_NAME],
  ['appTitleFull', APP_NAME],
  ['appTitleLegal', 'Ipsum Messages, Inc'],
  ['copyright', 'Copyright © 2021'],
  ['allRights', 'All Rights Reserved'],
  ['contactUs', 'Contact Us'],
  ['searchResults', 'Search Results'],
  ['product', 'messages'],  
  ['productCaps', 'Message'],  
  ['productPlural', 'messages'],
  ['productPluralCaps', 'Messages'],
])

export default (key: string, d?: string): string => (inst.get(key, d))
