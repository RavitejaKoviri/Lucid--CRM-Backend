import { ListViewProvider, useListView } from './core/ListViewProvider'
import { QueryRequestProvider } from './core/QueryRequestProvider'
import { QueryResponseProvider } from './core/QueryResponseProvider'
import { CampaignsListHeader } from './components/header/CampaignsListHeader'
import { CampaignsTable } from './table/CampaignsTable'
import { CampaignEditModal } from './campaign-edit-modal/CampaignEditModal'
import { KTCard } from '../../../../_metronic/helpers'

const CampaignsList = () => {
  const { itemIdForUpdate } = useListView()
  return (
    <>
      <KTCard>
        <CampaignsListHeader />
        <CampaignsTable />
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
