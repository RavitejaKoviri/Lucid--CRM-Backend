import {useListView} from '../../core/ListViewProvider'
import {TargetListToolbar} from './TargetListToolbar'
import {TargetListGrouping} from './TargetListGrouping'
import {TargetListSearchComponent} from './TargetListSearchComponent'

const TargetListHeader = () => {
  const {selected} = useListView()
  return (
    <div className='card-header border-0 py-6'>
      <TargetListSearchComponent />
      {/* begin::Card toolbar */}
      <div className='card-toolbar'>
        {/* begin::Group actions */}
        {selected.length > 0 ? <TargetListGrouping /> : <TargetListToolbar />}
        {/* end::Group actions */}
      </div>
      {/* end::Card toolbar */}
    </div>
  )
}

export {TargetListHeader}
