import { ListViewProvider, useListView } from './core/ListViewProvider'
import { QueryRequestProvider } from './core/QueryRequestProvider'
import { QueryResponseProvider } from './core/QueryResponseProvider'
import { CdrsListHeader } from './components/header/CdrsListHeader'
import { CdrsTable } from './table/CdrsTable'
import { CdrEditModal } from './cdr-edit-modal/CdrEditModal'
import { KTCard } from '../../../../_metronic/helpers'
import { useState } from 'react'
import UserContext from './table/columns/context'






const CdrsList = () => {
  const { itemIdForUpdate } = useListView()

  const [searchTerm, setSearchTerm] = useState<string>('')
  return (
    <>
      <KTCard>
        <UserContext.Provider value={{ searchTerm, setSearchTerm }}>
          <CdrsListHeader />
          <CdrsTable />
        </UserContext.Provider>

      </KTCard>
      {itemIdForUpdate !== undefined && <CdrEditModal />}
    </>
  )
}
const CdrsListWrapper = () => (
  <QueryRequestProvider>
    <QueryResponseProvider>
      <ListViewProvider>
        <CdrsList />
      </ListViewProvider>
    </QueryResponseProvider>
  </QueryRequestProvider>
)

export { CdrsListWrapper }
