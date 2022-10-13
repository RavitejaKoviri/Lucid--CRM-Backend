import { useListView } from '../../core/ListViewProvider'
import { SourcesListToolbar } from './SourcesListToolbar'
import { SourcesListGrouping } from './SourcesListGrouping'
import { SourcesListSearchComponent } from './SourcesListSearchComponent'

const SourcesListHeader = () => {
  const { selected } = useListView()
  return (
    <div className='card-header border-0 pt-6'>
      <SourcesListSearchComponent />
      {/* begin::Card toolbar */}
      <div className='card-toolbar'>
        {/* begin::Group actions */}
        {selected.length > 0 ? <SourcesListGrouping /> : <SourcesListToolbar />}
        {/* end::Group actions */}
      </div>
      {/* end::Card toolbar */}
    </div>
  )
}

export { SourcesListHeader }
