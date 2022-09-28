import React, {useEffect} from 'react'
import {useIntl} from 'react-intl'
import {PageTitle} from '../../../_metronic/layout/core'
import { Editer } from './components/EditerUi'

const EditerPage = () => {
  const intl = useIntl()
  return (
    <>
      <PageTitle breadcrumbs={[]}>Editer</PageTitle>
      <Editer />
    </>
  )
}

export {EditerPage}
