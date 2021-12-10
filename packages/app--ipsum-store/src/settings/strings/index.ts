import { Strings } from '@artemis-prime/wfw/util'

export const APP_NAME = 'Procom Portal'
const inst = new Strings([
  ['appTitleShortLower', 'Procom'],
  ['appTitleShortCaps', APP_NAME],
  ['appTitleFull', APP_NAME],
  ['appTitleLegal', 'Procom Portal'],
  ['contactUs', 'Contact Us'],
  ['searchResults', 'Search Results'],
  ['product', 'contract'],  
  ['productCaps', 'Contract'],  
  ['productPlural', 'contracts'],
  ['productPluralCaps', 'Contracts'],
])

export default (key: string, d?: string): string => (inst.get(key, d))
