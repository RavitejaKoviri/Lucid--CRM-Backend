import {useListView} from '../../core/ListViewProvider'
import {TicketListToolbar} from './TicketListToolbar'
import {TicketListGrouping} from './TicketListGrouping'
import {TicketListSearchComponent} from './TicketListSearchComponent'

const TargetListHeader = () => {
  const {selected} = useListView()
  return (
    <div className='card-header border-0 pt-6'>
      <TicketListSearchComponent />
      {/* begin::Card toolbar */}
      <div className='card-toolbar'>
        {/* begin::Group actions */}
        {selected.length > 0 ? <TicketListGrouping /> : <TicketListToolbar />}
        {/* end::Group actions */}
      </div>
      {/* end::Card toolbar */}
    </div>
  )
}

export {TargetListHeader}
