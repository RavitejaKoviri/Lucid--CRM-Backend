import { useListView } from '../../core/ListViewProvider'
import { DepartmentListToolbar } from './DepartmentListToolbar'
import { DepartmentListGrouping } from './DepartmentListGrouping'
import { DepartmentListSearchComponent } from './DepartmentListSearchComponent'

const DepartmentListHeader = () => {
  const { selected } = useListView()
  return (
    <div className='card-header border-0 pt-6'>
      <DepartmentListSearchComponent />
      {/* begin::Card toolbar */}
      <div className='card-toolbar'>
        {/* begin::Group actions */}
        {selected.length > 0 ? <DepartmentListGrouping /> : <DepartmentListToolbar />}
        {/* end::Group actions */}
      </div>
      {/* end::Card toolbar */}
    </div>
  )
}

export { DepartmentListHeader }
