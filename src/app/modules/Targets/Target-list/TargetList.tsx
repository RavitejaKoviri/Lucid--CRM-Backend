import { ListViewProvider, useListView } from './core/ListViewProvider'
import { QueryRequestProvider } from './core/QueryRequestProvider'
import { QueryResponseProvider } from './core/QueryResponseProvider'
import { TargetListHeader } from './components/header/TargetListHeader'
import { TargetTable } from './table/TargetTable'
import { TargetEditModal } from './Target-edit-modal/TargetEditModal'
import { KTCard } from '../../../../_metronic/helpers'
import { TargetIndex } from './targetUi/targetIndex'
import TargetContext from './table/columns/context'
import { useState } from 'react'

const TargetList = () => {
  const { itemIdForUpdate } = useListView()
  const [searchTerm, setSearchTerm] = useState<string>('')
  return (
    <>
      <TargetContext.Provider value={{ searchTerm, setSearchTerm }}>
        <KTCard>
          <TargetListHeader />
        </KTCard>
        <TargetIndex />
      </TargetContext.Provider>


      {itemIdForUpdate !== undefined && <TargetEditModal />}
    </>
  )
}

const TargetListWrapper = () => (
  <QueryRequestProvider>
    <QueryResponseProvider>
      <ListViewProvider>
        <TargetList />
      </ListViewProvider>
    </QueryResponseProvider>
  </QueryRequestProvider>
)

export { TargetListWrapper }
