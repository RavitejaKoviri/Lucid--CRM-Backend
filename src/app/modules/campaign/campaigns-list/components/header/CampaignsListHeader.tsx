import {useListView} from '../../core/ListViewProvider'
import {CampaignsListToolbar} from './CampaignListToolbar'
import {CampaignsListGrouping} from './CampaignsListGrouping'
import {CampaignsListSearchComponent} from './CampaignsListSearchComponent'

const CampaignsListHeader = () => {
  const {selected} = useListView()
  return (
    <div className='card-header border-0 pt-6'>
      <CampaignsListSearchComponent />
      {/* begin::Card toolbar */}
      <div className='card-toolbar'>
        {/* begin::Group actions */}
        {selected.length > 0 ? <CampaignsListGrouping /> : <CampaignsListToolbar />}
        {/* end::Group actions */}
      </div>
      {/* end::Card toolbar */}
    </div>
  )
}

export {CampaignsListHeader}
