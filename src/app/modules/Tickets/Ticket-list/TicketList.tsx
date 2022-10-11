import { ListViewProvider, useListView } from './core/ListViewProvider'
import { QueryRequestProvider } from './core/QueryRequestProvider'
import { QueryResponseProvider } from './core/QueryResponseProvider'
import { TargetListHeader } from './components/header/TicketListHeader'
import { TicketTable } from './table/TicketTable'
import { TicketEditModal } from './Ticket-edit-modal/TicketEditModal'
import { KTCard } from '../../../../_metronic/helpers'

const TicketList = () => {
  const { itemIdForUpdate } = useListView()
  return (
    <>
      <KTCard>
        <TargetListHeader />
        <TicketTable />
      </KTCard>
      {itemIdForUpdate !== undefined && <TicketEditModal />}
    </>
  )
}

const TicketListWrapper = () => (
  <QueryRequestProvider>
    <QueryResponseProvider>
      <ListViewProvider>
        <TicketList />
      </ListViewProvider>
    </QueryResponseProvider>
  </QueryRequestProvider>
)

export { TicketListWrapper }
