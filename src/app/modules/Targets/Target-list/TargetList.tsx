import { ListViewProvider, useListView } from './core/ListViewProvider'
import { QueryRequestProvider } from './core/QueryRequestProvider'
import { QueryResponseProvider } from './core/QueryResponseProvider'
import { TargetListHeader } from './components/header/TargetListHeader'
import { TargetTable } from './table/TargetTable'
import { TargetEditModal } from './Target-edit-modal/TargetEditModal'
import { KTCard } from '../../../../_metronic/helpers'

const TargetList = () => {
  const { itemIdForUpdate } = useListView()
  return (
    <>
      <KTCard>
        <TargetListHeader />
        <TargetTable />
      </KTCard>
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
