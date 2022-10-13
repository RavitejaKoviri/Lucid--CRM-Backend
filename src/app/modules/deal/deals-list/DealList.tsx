import { ListViewProvider, useListView } from './core/ListViewProvider'
import { QueryRequestProvider } from './core/QueryRequestProvider'
import { QueryResponseProvider } from './core/QueryResponseProvider'
import { DealsListHeader } from './components/header/DealsListHeader'
// import { DealsTable } from './table/DealsTable'
import { DealEditModal } from './deal-edit-modal/DealEditModal'
import { KTCard } from '../../../../_metronic/helpers'
import { DealIndex } from './dealUi/dealIndex'
import DealContext from './table/columns/context'
import { useState } from 'react'

const DealsList = () => {
  const { itemIdForUpdate } = useListView()
  const [searchTerm, setSearchTerm] = useState<string>('')
  return (
    <>
      <DealContext.Provider value={{ searchTerm, setSearchTerm }}>
        <KTCard>
          <DealsListHeader />
          {/* <DealsTable /> */}
        </KTCard>
        <DealIndex />
      </DealContext.Provider>


      {itemIdForUpdate !== undefined && <DealEditModal />}
    </>
  )
}

const DealsListWrapper = () => (
  <QueryRequestProvider>
    <QueryResponseProvider>
      <ListViewProvider>
        <DealsList />
      </ListViewProvider>
    </QueryResponseProvider>
  </QueryRequestProvider>
)

export { DealsListWrapper }
