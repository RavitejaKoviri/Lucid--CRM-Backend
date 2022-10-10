import { ListViewProvider, useListView } from './core/ListViewProvider'
import { QueryRequestProvider } from './core/QueryRequestProvider'
import { QueryResponseProvider } from './core/QueryResponseProvider'
import { UsersListHeader } from './components/header/LeadsListHeader'
import { LeadsTable } from './table/LeadsTable'
import { LeadEditModal } from './lead-edit-modal/LeadEditModal'
import { KTCard } from '../../../../_metronic/helpers'

const LeadsList = () => {
  const { itemIdForUpdate } = useListView()
  return (
    <>
      <KTCard>
        <UsersListHeader />
        <LeadsTable />
      </KTCard>
      {itemIdForUpdate !== undefined && <LeadEditModal />}
    </>
  )
}

const LeadsListWrapper = () => (
  <QueryRequestProvider>
    <QueryResponseProvider>
      <ListViewProvider>
        <LeadsList />
      </ListViewProvider>
    </QueryResponseProvider>
  </QueryRequestProvider>
)

export { LeadsListWrapper }
