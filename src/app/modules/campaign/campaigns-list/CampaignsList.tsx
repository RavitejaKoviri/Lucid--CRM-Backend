import { ListViewProvider, useListView } from './core/ListViewProvider'
import { QueryRequestProvider } from './core/QueryRequestProvider'
import { QueryResponseProvider } from './core/QueryResponseProvider'
import { CampaignsListHeader } from './components/header/CampaignsListHeader'
import { CampaignsTable } from './table/CampaignsTable'
import { CampaignEditModal } from './campaign-edit-modal/CampaignEditModal'
import { KTCard } from '../../../../_metronic/helpers'
import campgineContext from './table/columns/context'
import { useState } from 'react'

const CampaignsList = () => {
  const { itemIdForUpdate } = useListView()
  const [searchTerm, setSearchTerm] = useState<string>('')
  return (
    <>
      <KTCard>
        <campgineContext.Provider value={{ searchTerm, setSearchTerm }}>
          <CampaignsListHeader />
          <CampaignsTable />
        </campgineContext.Provider>

      </KTCard>
      {itemIdForUpdate !== undefined && <CampaignEditModal />}
    </>
  )
}

const CampaignsListWrapper = () => (
  <QueryRequestProvider>
    <QueryResponseProvider>
      <ListViewProvider>
        <CampaignsList />
      </ListViewProvider>
    </QueryResponseProvider>
  </QueryRequestProvider>
)

export { CampaignsListWrapper }
