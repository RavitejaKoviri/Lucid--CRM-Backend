import { useListView } from '../../core/ListViewProvider'
import { CdrsListToolbar } from './CdrsListToolbar'
import { CdrsListGrouping } from './CdrsListGrouping'
import { CdrsListSearchComponent } from './CdrsListSearchComponent'

const CdrsListHeader = () => {
  const { selected } = useListView()
  return (
    <div className='card-header border-0 pt-6'>
      <CdrsListSearchComponent />
      {/* begin::Card toolbar */}
      <div className='card-toolbar'>
        {/* begin::Group actions */}
        {selected.length > 0 ? <CdrsListGrouping /> : <CdrsListToolbar />}
        {/* end::Group actions */}
      </div>
      {/* end::Card toolbar */}
    </div>
  )
}

export { CdrsListHeader }
