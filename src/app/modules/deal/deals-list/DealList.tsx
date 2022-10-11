import { ListViewProvider, useListView } from './core/ListViewProvider'
import { QueryRequestProvider } from './core/QueryRequestProvider'
import { QueryResponseProvider } from './core/QueryResponseProvider'
import { DealsListHeader } from './components/header/DealsListHeader'
// import { DealsTable } from './table/DealsTable'
import { DealEditModal } from './deal-edit-modal/DealEditModal'
import { KTCard } from '../../../../_metronic/helpers'
import { DealIndex } from './dealUi/dealIndex'

const DealsList = () => {
  const { itemIdForUpdate } = useListView()
  return (
    <>
      <KTCard>
        <DealsListHeader />
        {/* <DealsTable /> */}
      </KTCard>
      <DealIndex/>

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
