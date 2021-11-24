import React from 'react'

import { Link } from '~/components'
import { APP_NAME } from '~/settings/strings'

import { TERMS_AND_CONDITIONS_ROUTE } from '~/Routes'

export default () => (
  <>The use of this account is governed by {APP_NAME}'s&nbsp; 
  <Link to={TERMS_AND_CONDITIONS_ROUTE}>terms and conditions</Link>.</>
) 
