import { ListViewProvider, useListView } from './core/ListViewProvider'
import { QueryRequestProvider } from './core/QueryRequestProvider'
import { QueryResponseProvider } from './core/QueryResponseProvider'
import { SourcesListHeader } from './components/header/SourcesListHeader'
import { SourcesTable } from './table/SourcesTable'
import { SourceEditModal } from './source-edit-modal/SourceEditModal'
import { KTCard } from '../../../../_metronic/helpers'
import { useState } from 'react'
import UserContext from './table/columns/context'






const SourcesList = () => {
  const { itemIdForUpdate } = useListView()

  const [searchTerm, setSearchTerm] = useState<string>('')
  return (
    <>
      <KTCard>
        <UserContext.Provider value={{ searchTerm, setSearchTerm }}>
          <SourcesListHeader />
          <SourcesTable />
        </UserContext.Provider>

      </KTCard>
      {itemIdForUpdate !== undefined && <SourceEditModal />}
    </>
  )
}
const SourcesListWrapper = () => (
  <QueryRequestProvider>
    <QueryResponseProvider>
      <ListViewProvider>
        <SourcesList />
      </ListViewProvider>
    </QueryResponseProvider>
  </QueryRequestProvider>
)

export { SourcesListWrapper }
