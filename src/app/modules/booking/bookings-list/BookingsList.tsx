import { ListViewProvider, useListView } from './core/ListViewProvider'
import { QueryRequestProvider } from './core/QueryRequestProvider'
import { QueryResponseProvider } from './core/QueryResponseProvider'
import { BookingsListHeader } from './components/header/BookingsListHeader'
import { BookingsTable } from './table/BookingsTable'
import { BookingEditModal } from './booking-edit-modal/BookingEditModal'
import { KTCard } from '../../../../_metronic/helpers'

const BookingsList = () => {
  const { itemIdForUpdate } = useListView()
  return (
    <>
      <KTCard>
        <BookingsListHeader />
        <BookingsTable />
      </KTCard>
      {itemIdForUpdate !== undefined && <BookingEditModal />}
    </>
  )
}

const BookingsListWrapper = () => (
  <QueryRequestProvider>
    <QueryResponseProvider>
      <ListViewProvider>
        <BookingsList />
      </ListViewProvider>
    </QueryResponseProvider>
  </QueryRequestProvider>
)

export { BookingsListWrapper }
