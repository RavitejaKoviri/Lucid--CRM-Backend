import { ListViewProvider, useListView } from './core/ListViewProvider'
import { QueryRequestProvider } from './core/QueryRequestProvider'
import { QueryResponseProvider } from './core/QueryResponseProvider'
import { LeadsListHeader } from './components/header/LeadsListHeader'
import { LeadsTable } from './table/LeadsTable'
import { LeadEditModal } from './lead-edit-modal/LeadEditModal'
import { KTCard } from '../../../../_metronic/helpers'
import { useState } from 'react'
import LeadContext from './table/columns/context'
// import UserContext from './table/columns/context'







const LeadsList = () => {
  const { itemIdForUpdate } = useListView()

  const [searchTerm, setSearchTerm] = useState<string>('')
  return (
    <>
      <KTCard>
        <LeadContext.Provider value={{ searchTerm, setSearchTerm }}>
          <LeadsListHeader />
          <LeadsTable />
        </LeadContext.Provider>

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
