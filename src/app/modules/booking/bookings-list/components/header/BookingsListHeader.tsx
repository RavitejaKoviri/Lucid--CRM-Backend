import {useListView} from '../../core/ListViewProvider'
import {BookingsListToolbar} from './BookingListToolbar'
import {BookingsListGrouping} from './BookingsListGrouping'
import {BookingsListSearchComponent} from './BookingsListSearchComponent'

const BookingsListHeader = () => {
  const {selected} = useListView()
  return (
    <div className='card-header border-0 pt-6'>
      <BookingsListSearchComponent />
      {/* begin::Card toolbar */}
      <div className='card-toolbar'>
        {/* begin::Group actions */}
        {selected.length > 0 ? <BookingsListGrouping /> : <BookingsListToolbar />}
        {/* end::Group actions */}
      </div>
      {/* end::Card toolbar */}
    </div>
  )
}

export {BookingsListHeader}
