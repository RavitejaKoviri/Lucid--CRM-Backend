import {useListView} from '../../core/ListViewProvider'
import {CompanyListToolbar} from './CompanyListToolbar'
import {CompanyListGrouping} from './CompanyListGrouping'
import {CompanyListSearchComponent} from './CompanyListSearchComponent'

const CompanyListHeader = () => {
  const {selected} = useListView()
  return (
    <div className='card-header border-0 pt-6'>
      <CompanyListSearchComponent />
      {/* begin::Card toolbar */}
      <div className='card-toolbar'>
        {/* begin::Group actions */}
        {selected.length > 0 ? <CompanyListGrouping /> : <CompanyListToolbar />}
        {/* end::Group actions */}
      </div>
      {/* end::Card toolbar */}
    </div>
  )
}

export {CompanyListHeader}
