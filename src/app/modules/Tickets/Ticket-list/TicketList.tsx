import { ListViewProvider, useListView } from './core/ListViewProvider'
import { QueryRequestProvider } from './core/QueryRequestProvider'
import { QueryResponseProvider } from './core/QueryResponseProvider'
import { TargetListHeader } from './components/header/TicketListHeader'
import { TicketTable } from './table/TicketTable'
import { TicketEditModal } from './Ticket-edit-modal/TicketEditModal'
import { KTCard } from '../../../../_metronic/helpers'
import { TicketIndex } from './ticketUi/ticketIndex'
import TicketContext from './table/columns/context'
import { useState } from 'react'

const TicketList = () => {
  const { itemIdForUpdate } = useListView()
  const [searchTerm, setSearchTerm] = useState<string>('')
  return (
    <>
      <TicketContext.Provider value={{ searchTerm, setSearchTerm }}>
        <KTCard>
          <TargetListHeader />
          {/* <TicketTable /> */}
        </KTCard>
        <TicketIndex />
      </TicketContext.Provider>


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
