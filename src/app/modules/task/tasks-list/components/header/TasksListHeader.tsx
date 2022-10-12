import {useListView} from '../../core/ListViewProvider'
import {TasksListToolbar} from './TaskListToolbar'
import {TasksListGrouping} from './TasksListGrouping'
import {TasksListSearchComponent} from './TasksListSearchComponent'

const TasksListHeader = () => {
  const {selected} = useListView()
  return (
    <div className='card-header border-0 py-6'>
      <TasksListSearchComponent />
      {/* begin::Card toolbar */}
      <div className='card-toolbar'>
        {/* begin::Group actions */}
        {selected.length > 0 ? <TasksListGrouping /> : <TasksListToolbar />}
        {/* end::Group actions */}
      </div>
      {/* end::Card toolbar */}
    </div>
  )
}

export {TasksListHeader}
