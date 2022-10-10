import { useListView } from '../../core/ListViewProvider'
import { LeadsListToolbar } from './LeadsListToolbar'
import { LeadsListGrouping } from './LeadsListGrouping'
import { LeadsListSearchComponent } from './LeadsListSearchComponent'

const UsersListHeader = () => {
  const { selected } = useListView()
  return (
    <div className='card-header border-0 pt-6'>
      <LeadsListSearchComponent />
      {/* begin::Card toolbar */}
      <div className='card-toolbar'>
        {/* begin::Group actions */}
        {selected.length > 0 ? <LeadsListGrouping /> : <LeadsListToolbar />}
        {/* end::Group actions */}
      </div>
      {/* end::Card toolbar */}
    </div>
  )
}

export { UsersListHeader }
